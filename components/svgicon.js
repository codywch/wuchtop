export default function Svgicon({ hrefUrl, svgPath, svgTxt, newTag }) {
  return (
    <div className="flex flex-col ml-5">
      <div className="flex flex-row">
        <span className='basis-1/3'></span>
        {newTag ? (
          <a className="svgicon-a" target="_blank" href={hrefUrl}>
            {svgPath}
          </a>
        ) : (
          <a className="svgicon-a" href={hrefUrl}>
            {svgPath}
          </a>
        )}
        
        <span className='basis-1/3'></span>
      </div>
      {svgTxt ? <p className="text-xs">{svgTxt}</p> : ""}
    </div>
  )
}