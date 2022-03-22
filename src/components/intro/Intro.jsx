import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react" //the Hook useRef works like document.QuerySelector


export default function Intro() {
    
    const textRef = useRef(); //defining textRefused in the span down below in h3

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['DEVELOPER', 'DESIGNER', 'CONTENT CREATOR' ]
         })
    },[]) //because we have an empty array, the useEffect will work one time
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                {/* <div className="imgContainer"> */}
                    <img src="assets/ME-colors (1).png" alt=""/>
                    
                {/* </div> */}
                <div className="introBlock"></div>
            </div>
            <div className="right">
                <div className="wrapper">
                   <div className="titleText">
                    <h2>Hey there, I'm</h2>
                    <h1>Amanda Peters</h1>
                    <h3>SOFTWARE <span ref={textRef}></span></h3>
                    </div>
                    <img className="wallpaper" src="assets/white-laptop.jpg" alt=""></img>
                    {/* <a className="cat" href="#about">
                        <img className="cat-sleep" src="assets/cats/cat-sleep-bubble.png" alt="Cat Sleep"/>
                        <img className="cat-awake" onClick="#about" src="assets/cats/cat-awake-bubble.png" alt="Cat Awake"/>
                    </a> */}
                </div>
                    {/* <div className="catBed">
                        <img src="assets/cats/cat-bed-boop.png" alt=""></img>
                    </div> */}
                    {/* <a href="#portfolio">
                        <img src="assets/ArrowsDown.png" alt=""/>
                    </a>  */}
            </div>
        </div>
        
    )
}