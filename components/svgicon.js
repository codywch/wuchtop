export default function Svgicon({ hrefUrl, svgPath, svgTxt }) {
  return (
    <div className="flex flex-col ml-5">
      <div className="flex flex-row">
        <span className='basis-1/3'></span>
        <a className="svgicon-a" target="_blank" href={hrefUrl}>
          {svgPath}
        </a>
        <span className='basis-1/3'></span>
      </div>
      <p className="text-xs">{svgTxt}</p>
    </div>
  )
}