import Link from "next/link";
import Svgicon from "./svgicon";
import headerNavLinks from "../data/headerNavLinks";
import ThemeSwitch from "./ThemeSwitch";

export default function Top() {
  return (
    <div className="fixed top-0 text-center min-w-[70%] sm:min-w-[50%] transition-transform 
    max-w-2xl z-10 flex flex-row bg-opacity-80 bg-white py-3 shadow dark:bg-gray-700">
      <div className="basis-1/4 pt-2">
        <Svgicon
          hrefUrl="http://wuch.top"
          svgPath={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>}
        />
      </div>  

      {headerNavLinks.map((link) => (
        <div key={link.title} className="basis-1/4 duration-500 flex justify-center items-center text-center font-bold">
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