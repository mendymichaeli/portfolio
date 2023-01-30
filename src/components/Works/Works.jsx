import { useState } from "react"
import "./works.scss"

export default function Works() {

  const [currentSlider,setCurrentSlider]=useState(0)
  const data = [
    {
      id:1,
      icon:"../../assets/laptop.png",
      title:"E-Commerce - Angular - Web",
      desc:"Shopping online website - Angular as frontend and NodeJS as backend.",
      img:"../../assets/ShoppingOnlineProject.png",
      link:"https://github.com/mendymichaeli/E-commerce"
    },
    {
      id:2,
      icon:"../../assets/mobile.png",
      title:"Vacations Tracker - React -  Web/Mobile",
      desc:"Choose your favorite vacations - React as frontend and NodeJS as backend.",
      img:"../../assets/mobileVacation.png",
      link:"https://github.com/mendymichaeli/Vacations-React-Project"
    },
    {
      id:3,
      icon:"../../assets/tablet.png",
      title:"Youtube API - Bootstrap -  Web/Tablet",
      desc:"Finding first 10 results of youtube video by search - REACT as frontend and youtubeAPI.",
      img:"../../assets/youtubeAPI.png",
      link:"https://github.com/mendymichaeli/YouTube"
    },
  ]
  const handelClick=(way)=>{
    console.log(way)
    way === "left"
    ?
    setCurrentSlider(currentSlider>0?currentSlider-1:data.length-1)
    :
    setCurrentSlider(currentSlider<data.length-1?currentSlider+1:0)
    
  }
  return (

    <div className="works" id="works">
       
      <div className="slider" style={{transform: `translateX(-${currentSlider*100}vw)`}}>
        {data.map((item)=>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h3 onClick={()=> window.open(item.link, "_blank")}>{item.title}</h3>
                <p>{item.desc}</p>
                <span onClick={()=> window.open(item.link, "_blank")}>Show me in GitHab</span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="../../assets/arrow.png" className="arrow right" alt="" onClick={()=>handelClick("right")} />
      <img src="../../assets/arrow.png" className="arrow left" alt="" onClick={()=>handelClick("left")} />
    </div>
  )
}