import "./topbar.scss"
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
// import AdbIcon from '@mui/icons-material/Adb';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar"> {/* if menuOpen is True, make it active ----- need to have the space " " after "topbar " for this to work*/}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="assets/white-logo-square.png" alt=""></img>
                    </a>
                    {/* <div className="itemContainer">
                        <BsFillPersonFill className="icon"/>
                        <span>715.450.4230</span>
                        </div>
                    <div className="itemContainer">
                        <BsFillEnvelopeFill className="icon"/>
                        <span>amanda.nielsen@me.com</span>
                    </div> */}
                </div>
                {/* <h1>Hello</h1> THIS IS A CENTER TITLE IF NEEDED */}
                <div className="right">
                <div className="itemContainer">
                        {/* <AdbIcon/> */}
                        <BsFillPersonFill className="icon"/>
                        {/* <span>715.450.4230</span> */}
                        </div>
                    <div className="itemContainer">
                        <BsFillEnvelopeFill className="icon"/>
                        {/* <span>amanda.nielsen@me.com</span> */}
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}> {/* ! = do the opposite of menuOpen  -- ALLOWS for the onclick event of X to hamburger and back again -- whenever it is FALSE, when I click it will turn TRUE (See state in app.jsx)*/}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                    
            </div>

        </div>
    )
}