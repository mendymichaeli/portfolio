import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./protfolio.scss"
import {
  webPortfolio,
  mobilePortfolio,
  fitchersPortfolio,
} from "../../Data";


export default function Protfolio() {
  const [selected, setSelected] = useState("web")
  const [data, setData] = useState([])

  const list = [
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "fitchers",
      title: "Fitchers"
    },

  ]

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      case "fitchers":
        setData(fitchersPortfolio)
        break;

      default:
        setData(webPortfolio)
    }
  }, [selected])
  return (

    <div className="protfolio" id="protfolio">
      {console.log("data", data)}
      <h1>Portfolio*</h1>
      <ul>
        {list.map((item) => {
          return <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} />
        })}
      </ul>
     
      <div className="container">
        {data.map((item) => (
            <div className="item" onClick={() => window.open(item.link, "_blank")}>
              {<img src={item.img} alt="item.title" />}
              <h3>{item.title}</h3>
            </div>
         
        ))}
      </div>
    </div>
  )
}