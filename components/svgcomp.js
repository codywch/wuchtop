import { FaTv, FaMusic, FaGithub, FaImage } from 'react-icons/fa'

export default function Svgcomp({ hrefUrl, type, svgTxt, newTag }) {
  let svgstr = <FaImage className="w-6 h-8" />
  switch (type) {
    case "bilibili":
      svgstr = <FaTv className="w-6 h-8" />
      break
    case "tiktok":
      svgstr = <FaMusic className="w-6 h-8" />
      break
    case "github":
      svgstr = <FaGithub className="w-6 h-8" />
      break
  }

  return (
    <div className="flex flex-col ml-5">
      <div className="flex flex-row">
        <span className='basis-1/3'></span>
        {newTag ? (
          <a className="svgicon-a" target="_blank" href={hrefUrl}>
            {svgstr}
          </a>
        ) : (
          <a className="svgicon-a" href={hrefUrl}>
            {svgstr}
          </a>
        )}
        
        <span className='basis-1/3'></span>
      </div>
      {svgTxt ? <p className="text-xs">{svgTxt}</p> : ""}
    </div>
  )
}