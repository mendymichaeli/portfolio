import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef()

  useEffect(() => {
    console.log(textRef)
     init(textRef.current,
      {
        showCursor: true,
        backDelay:1500,
        backSpeed:50,
        strings: ['Developer']
      }) 

  }, [])

    return(
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="../../assets/man.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Mendy Michaeli</h1>
            <h3>Full Stack <span ref={textRef}></span></h3>
          </div>
          <a href="#protfolio">
            <img src="../../assets/arrow.png" alt="" />
          </a>
        </div>
      </div>
    )
}