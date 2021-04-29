import React from 'react'

export default function RightArticle({lineImg, img}) {
    return (
     <div className="rightArticle" >
        <div className="rightArticleDiv">
            <img src={img} />
           <div  className="para-font">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
        </div>
        <img src={lineImg} style={{width: "7px", height: "150px"}}/>
    </div>
    )
}
