import React from 'react'

export default function LeftArticle({lineImg, img}) {
    return (
    <div className="leftArticle" >
        <img src={lineImg} style={{width: "7px", height: "150px"}}></img>
        <div className="leftArticleDiv">
           <div  className="para-font">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
            <img src={img} />
        </div>
    </div>
    )
}
