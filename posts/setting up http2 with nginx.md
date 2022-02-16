---
title: 'Setting Up HTTP/2 With Nginx For My Blog'
metaTitle: 'Setting up http/2 with nginx and centos 8'
metaDesc: 'I changed my web server from http/1.1 to http/2.0, and use the https protocol for more seucurity, this article is a record of the proccessing'
date: '2022-02-16'
socialImage: images/social/http2.png
tags:
  - http2
---

This is a simple tutorial for making the server both Secure and responsive as possible using HTTP/2.0.

In this tutorial I recorded the steps of setting up http2 to my web server(nginx). I use NGINX as server and my OS is Centos8 on vultr.

###  1. CHANGE THE SSH PORT FOR SECURE
#### 1.1 change the ssh port from 22 to xxxx
find #Port 22 and uncomment it(remove '#'), and change to xxxx(whatever the number you want), and save
```bash
# vi /etc/ssh/sshd_config
```

#### 1.2 allow SELinex sshd to use port xxxx
```bash
# semanage port -a -t ssh_port_t -p tcp xxxx
```

#### 1.3 open this port in the firewall and reload the firewall to apply it
```bash
# firewall-cmd --permanent --zone=public --add-port=xxxx/tcp
# firewall-cmd --reload
```

#### 1.4 restart the ssh service to apply the change
```bash
# systemctl restart sshd
```

### 2. NEW USER

#### 2.1 add user
```bash
# useradd cody
# passwd cody
# usermod -aG wheel cody
```
now you can verify it in the /etc/group file
if you wan't to remove Privileges from user, then typo
```bash
# gpasswd -d cody wheel
```

#### 2.2 allow certificate logins in ssh
```bash
# sudo vi /etc/ssh/sshd_config
PubkeyAuthentication yes
# ssh-copy-id -i ~/.ssh/id_rsa cody@host -p xxxx
```
#### 2.3 disable remote root logins
```bash
# sudo vi /etc/ssh/sshd_config
#PsermitRootLogin yes -> PermitRootLogin no
PasswordAuthentiaction no
# sudo systemctl restart sshd
```

### 3. INSTALL NODE.JS

#### 3.1 there are multiple ways to do this via yum, nvm and more. Prefer nvm(node version manager), via later on its easier to change node version if needed.
```bash
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
### 4. SETUP THE FIREWALL
setup the firewall, SELinux and nginx. Also we need a certificate so we can use HTTPS and HTTP/2.0
#### 4.1 firewall open port 80 and 443 and add the http & https protocols to the firewall
```bash
# sudo firewall-cmd --zone=public --permanent --add-service=http
success
# sudo firewall-cmd --zone=public --permanent --add-service=https
success
# sudo firewall-cmd --zone=public --permanent --add-port=80/tcp
success
# sudo firewall-cmd --zone=public --permanent --add-port=443/tcp
success
# sudo firewall-cmd --reload
success
# sudo firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: ssh dhcpv6-client http https
  ports: 2244/tcp 80/tcp 443/tcp
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```
### 5. LET'S ENCRYPT & CERTBOT
use Let's encrypt to get free certificates for the site to be used with HTTPS
5.1 install certbot on your server
```bash
# sudo yum install epel-release
# sudo yum install certbot python3-certbot-nginx
```

#### 5.2 modify nginx.conf
```bash
# sudo vi /etc/nginx/nginx.conf
client_max_body_size 50M;
    ssl_session_cache    shared:SSL:10m;
    ssl_session_timeout  10m;
    # Forward secrecy settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA
+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS !RC4";

    ssl_stapling on;
    ssl_stapling_verify on;

    include /etc/nginx/conf.d/*.conf;

    proxy_cache_path /home/cody/wuchtop levels=1:2 keys_zone=wuchtop:60m max_size=300m inactive=24h;
    proxy_cache_key "$scheme$request_method$host$request_uri";
    proxy_cache_methods GET HEAD;
```
#### 5.3 modify wuch.top.conf
```bash
# sudo vi /etc/nginx/vhost/wuch.top.conf
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
server {
    listen 443 ssl http2;
    listen [::]:443 ipv6only=on ssl http2;

    gzip off;

    server_name wuch.top;

    ssl_certificate        /etc/letsencrypt/live/wuch.top/fullchain.pem;
    ssl_certificate_key    /etc/letsencrypt/live/wuch.top/privkey.pem;
    ssl_dhparam            /etc/nginx/ssl/dhparam.pem;
    ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS !RC4";
    ssl_protocols TLSv1.2 TLSv1.3;

    add_header Strict-Transport-Security max-age=31536000;
    add_header X-Frame-Options SAMEORIGIN;

    location / {
        proxy_cache ghostcache;
        proxy_cache_valid 60m;
        proxy_cache_valid 404 1m;
        proxy_cache_bypass $http_cache_control;
        proxy_ignore_headers Set-Cookie;
        proxy_hide_header Set-Cookie;
        proxy_cache_use_stale error timeout invalid_header updating http_500 http_502 http_503 http_504;
        proxy_ignore_headers Cache-Control;
        add_header X-Cache-Status $upstream_cache_status;

        limit_req zone=one burst=20 nodelay;
        proxy_pass http://127.0.0.1:3333;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffering off;
    }
}

server {
    listen 80;
    listen [::]:80 ipv6only=on;
    server_name    wuch.top;
    return         301 https://$server_name$request_uri;
}
```

#### 5.4 generate dhparam.pem certificate file
```bash
# sudo mkdir /etc/nginx/ssl
# sudo openssl dhparam -out /etc/nginx/ssl/dhparam.pem 4096
```

#### 6 RENEWING A CERTIFICATE
the LE certificate is usually 3 months to expired, so we need renew it when it's going to expire
#### 6.1 simulate the renew process with --dry-run parameter
```bash
# sudo certbot renew --dry-run
```

#### 6.2 actually renew certificate
```bash
# sudo cerbot renew
```

#### 6.3 reload your web service
```bash
# sudo nginx -s reload
```

#### 6.4 automate the renewal with script
```bash
# sudo vi /etc/cron.daily/letsencrypt-renew
`
#!/bin/sh
if certbot renew > /var/log/letsencrypt/renew.log 2>&1; then
    nginx -s reload
    pm2 restart 0
fi
exit
`
# sudo chmode +x /etc/cron.daily/letsencrypt-renew
```
#### 6.5 add script to crontab
```bash
# sudo crontab -e
01 02,14 * * * /etc/cron.daily/letsencrypt-renew
```