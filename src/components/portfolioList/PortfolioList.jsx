import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {
 
  return (
    <li className={active?"PortfolioList active":"PortfolioList"} onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}
