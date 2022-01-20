import Link from "next/link";
import Svgicon from "./svgicon";
import headerNavLinks from "../data/headerNavLinks";
import ThemeSwitch from "./ThemeSwitch";

import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/helpers";

export default function Top({ home }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.scrollY
    // set state based on location info
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 100)
      || currentScrollPos < 10 || (home && currentScrollPos < 40))
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos)
  }, 100) 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [prevScrollPos, visible, handleScroll])

  return (
    <div className={`fixed ${visible ? 'top-0' : '-top-20'} ease duration-300 text-center min-w-[70%] sm:min-w-[50%] 
     transform max-w-2xl z-30 flex flex-row bg-white bg-opacity-50 py-3 shadow backdrop-filter backdrop-blur
    dark:bg-gray-800 text-blue-800 dark:bg-opacity-50 dark:text-blue-300`}>
      <div className="basis-1/4 pt-2">
        <Svgicon
          hrefUrl="/"
          svgPath={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>}
        />
      </div>  

      {headerNavLinks.map((link) => (
        <div key={link.title} className="basis-1/4 duration-500 flex justify-center items-center 
        text-center font-bold">
        <Link 
          href={link.href}
        >
          {link.title}
        </Link>
        </div>
      ))}
      <div className="basis-1/4"><ThemeSwitch /></div>  
    </div>
  )
}