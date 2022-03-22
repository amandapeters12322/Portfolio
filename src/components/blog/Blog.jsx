//https://dev.to/api/articles?username=amanda_peters12322 <<<--Use this endpoint below to access dev.to API blog data

import "./blog.scss"
import React, { useState, useEffect } from "react";


export default function Blog() {
    const [data, setData] = useState([]);
    const [activePost, setActivePost] = useState({})

    const apiGet = () => {
        fetch("https://dev.to/api/articles?username=amanda_peters12322") //endpoint
          .then((response) => {
              console.log(response)
              return response.json()})
          .then((json) => {
            console.log(json);
            setData(json);
            setActivePost({
                post: json[0],
                index: 0
            })
          });
      };

      useEffect(() => {
          apiGet();
      }, []);

      useEffect(() => {
          console.log(activePost)
      }, [activePost])
      
      const getPreviousPost = (currentIndex) => {
          let newIndex;
        if (currentIndex === 0) {
            newIndex = data.length - 1
        } else {
            newIndex = currentIndex - 1
        }
        setActivePost({post: data[newIndex], index: newIndex})
      }

      const getNextPost = (currentIndex) => {
          let newIndex;
        if (currentIndex >= data.length - 1) {
            newIndex = 0
        } else {
            newIndex = currentIndex + 1
        }
        setActivePost({post: data[newIndex], index: newIndex})
      }

    return (
        <div className="blog" id="blog">
            <div className="left-side">
                <h2>blog.</h2>
                <h3>A collection of my thoughts, ideas, ramblings and learnings.</h3>
                <div className="squig">
                    <img src="assets/squiggle1.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <div className="slider">
                    <div className="container">
                        {activePost && !!activePost.index >= 0 && <div onClick={() => getPreviousPost(activePost.index)}>
                            <img src="assets/light-grey-arrow.png" className="arrow left" alt=""/>
                        </div>}
                        {!!activePost && activePost.post && 
                        <div className="item">
                            <div className="topItem">
                                <img src={activePost.post.cover_image} alt=""/>
                            </div>  
                            <div className="bottomItem">
                                <div className="bottomContainer"> 
                                    <div className="titleColumn">
                                        <h2>{activePost.post.title}</h2>
                                        <div className="bloglink">
                                            <a href={activePost.post.url}>Click Here to Read More</a>
                                        </div>  
                                    </div>
                                    <div className="previewBorder"></div>
                                    <div className="preview">
                                        <p>{activePost.post.description}</p>
                                    </div>   
                                </div>
                            </div>
                        </div>}
                        {activePost && !!activePost.index >= 0 &&  <div onClick={() => getNextPost(activePost.index)}>
                            <img src="assets/light-grey-arrow.png" className="arrow right" alt=""/>
                        </div>}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

















// import "./blog.scss"

// export default function Blog() {
    

//     return (
//         <div className="blog" id="blog">
//             <div className="left-side">
                
//                 <h2>blog.</h2>
//                 <h3>A collection of my thoughts.</h3>
                
//             </div>
//             <div className="right">
//                 <div className="wrapper">
//                 <div className="slider">
//                     <div className="container">
//                         <img src="assets/ArrowsDown.png" className="arrow left" alt=""/>
//                         <div className="item">
//                             <div className="leftItem">
//                             <div className="leftContainer">
//                                     {/* <div className="imgContainer">
//                                         <img src="" alt=""/>
//                                     </div> */}
//                                     <h2>Blog Title</h2>
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor dicta eius corporis atque accusantium quidem explicabo voluptates recusandae, doloremque aliquam temporibus natus consequatur animi culpa adipisci voluptatem, sequi nulla.</p>
//                                     <span>Click here to read</span>
//                             </div>
//                             </div>
//                             <div className="rightItem">
//                                 <img src="assets/blog1.jpeg" alt=""/>
//                             </div>   
//                         </div>
//                         <img src="assets/ArrowsDown.png" className="arrow right" alt=""/>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }