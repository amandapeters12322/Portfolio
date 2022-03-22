import "./portfolio.scss";
import React from "react";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import Video from "../video/Video";
import Modal from "../modal/Modal";



import {
    // featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
    brandingPortfolio,
  } from "../../data";


export default function Portfolio() { //Below we create a state with the useState hook, need a [value, setter]
    const [selected, setSelected] = useState("web"); //creating a new state to determine which list item is selected and active; initial state is featured and whenever one is selected it is active class
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]); //whenever a selected is chosen, it will load the matching data below for each feature section
    const list = [
        // {
        //     id: "featured",
        //     title: "Featured",
        // },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
        {
            id: "branding",
            title: "Branding",
        },
    ];

    useEffect(() => {
        switch (selected) {
        //   case "featured":
        //     setData(featuredPortfolio);
        //     break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "design":
            setData(designPortfolio);
            break;
          case "content":
            setData(contentPortfolio);
            break;
        case "branding":
            setData(brandingPortfolio);
            break;
          default: //MUST indicate a default selection
            setData(webPortfolio);
        }
      }, [selected]); //dependecy is 'selected' because whenever it changes it will run the useEffect

    return (
        <div className="portfolio" id="portfolio">
            <h1>portfolio.</h1>
            <div className="decoration">
                <img src="assets/squiggle2.png" alt=""></img>
            </div>
            <ul>
                {list.map((item) => ( //brings the titles from above list defined
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} //if selected it calls the item id 
                    setSelected={setSelected} //passing setSelected
                    id={item.id}
                    /> 
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
            {selected==="web" ? ( 
            <Video className="videoPlayer" onClick={() => Video}>
             </Video>) : (null)
             }

            <div>
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>




        </div>
    )
}

