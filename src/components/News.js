import React from 'react'
import img1 from '../Assets/Group 953.svg'
import img2 from '../Assets/filled outline.svg'
import img3 from '../Assets/healthy-eating.svg'
export default function News() {
    return (
        <div className="news">
            <p>Customers/ diners</p> 
            <div className="newsDiv">
                <div className="newsImgDiv">
                   <img src={img1} style={{width: "80px"}}/>
                </div>
                <div className="newsImgDiv">
                   <img src={img2} style={{width: "100px"}}/>
                </div>
                <div className="newsImgDiv">
                   <img src={img3} style={{width: "100px"}}/>
                </div>
            </div>
        </div>
    )
}
