import Link from "next/link";
import Scrolltotop from "./scrolltotop";

export default function Footer() {
  return (
    <footer className="w-full z-10"> 
      <hr className="mb-8 border-gray-400 border-1 border-opacity-30" />
      <div className="mx-auto max-w-2xl text-indigo-800 dark:text-blue-300">
        <div className="grid justify-between items-center w-full grid-cols-4 pb-2 sm:grid-cols-[repeat(4, min-content)]">
          <div className="footer-items">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>

          <div className="footer-items">
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </div>

          <div className="footer-items">
            <Link href="/tags">
              <a>Tags</a>
            </Link>
          </div>

          <div className="footer-items">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
      </div>
    
      <div className="w-full py-4 text-xs text-center">
        <p>
          © 2022 - made with
          <span className="px-1 duration-700 cursor-pointer 
          saturate-0 hover:saturate-100 hover:brightness-100 brightness-50 dark:brightness-[320%] dark:hover:brightness-100 hover:text-red-500 transition-color">
          ♥︎</span>
          Cody Wu ・ Powered by
          <Link to="route" href="#" rel="noopener noreferrer">
            <a target="_blank" href="https://nextjs.org/">
              <span className="px-1 text-blue-500 hover:cursor-pointer">Next JS.</span>
            </a>
          </Link>
        </p>
      </div>

      <Scrolltotop />
    </footer>
  )
}