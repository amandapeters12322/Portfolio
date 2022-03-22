import "./video.scss"
import React from "react";


export default function Video() {
    const [shown, setShown] = React.useState(false)
    
    return (
      <div className="video">
          <div className="buttontest">
        {shown ? <YoutubeVideo src="https://youtu.be/B-Ut7yXeWyk"/> : null}
        <button className="video-button" onClick={() => setShown(!shown)}>Click to Watch the Demo</button>
        </div>
      </div>
    );
  }
  
  const YoutubeVideo = (props) => {
    return <div style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 5}}>
      <iframe className="videoPlayer"
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/B-Ut7yXeWyk" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    </div>
  }