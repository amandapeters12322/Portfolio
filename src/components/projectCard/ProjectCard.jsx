import "./projectCard.scss"
import React, { useState, useEffect } from "react";
import {
    // featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
    brandingPortfolio,
  } from "../../data";

  export default function ProjectCard({id, setSelected}) {
    const [data, setData] = useState([]); //whenever a selected is chosen, it will load the matching data below for each feature section
    // const [card, setCard] = React.useState(false)
    const [selected, setSelected] = useState([]);
    
    useEffect(() => {
        switch (selected) {
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
      }, [selected]);
    
    
    return (
        <div className="projectCard" onClick={() => setSelected(id)}>
                {data.map((d) => (
                <div className="cardDisplay">
                    <h3>{d.description}</h3>
                </div>
                ))}
        </div>
    );
}






