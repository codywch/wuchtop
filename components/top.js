import Link from "next/link";
import headerNavLinks from "../data/headerNavLinks";
import ThemeSwitch from "./ThemeSwitch";

export default function Top() {
  return (
    <div className="fixed top-0 text-center min-w-[70%] sm:min-w-[50%] transition-transform 
    max-w-2xl z-10 flex flex-row bg-opacity-80 bg-white py-3 shadow dark:bg-gray-700">
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