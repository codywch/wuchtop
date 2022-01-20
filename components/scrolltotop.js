import { useEffect, useState } from "react"
import { debounce } from "../utilities/helpers"

export default function Scrolltotop() {

  const [showButton, setShowButton] = useState(false)

  const handleScroll = debounce(() => {
    if (window.scrollY > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={scrollToTop} aria-label="Scroll to top" type="button" className={`fixed z-10 text-white transition-transform duration-300 bg-blue-900 rounded-full bottom-3 right-3 button dark:bg-gray-700 focus:outline-none transform ${showButton ? 'translate-y-0 shadow-lg' : 'translate-y-20'}`}>
      <svg className="w-10 h-10 fill-current sm:w-16 sm:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 13.41l-4.29-4.24a1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42 1 1 0 001.41 0L12 11.29l3.54 3.54a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 00.05-1.42z"></path></svg>
    </button>
  )
}