import React from 'react'
import maskGroupImg from '../Assets/Mask Group 62/Mask Group 62.png'
import img1 from '../Assets/Mask Group 87/Mask Group 87.png'
import img2 from '../Assets/Mask Group 86/Mask Group 86.png'
import img3 from '../Assets/Mask Group 88/Mask Group 88.png'

export default function Services() {
    return (
        <div style={{position: "relative"}}>
            <div style={{marginTop: "50px"}}>
                <header style={{display: "flex", justifyContent: "center", fontSize: "x-large", fontWeight: "600"}}>
                    Lorem ipsumLorem Ipsum
                </header>
                <p style={{font: "normal normal large Roboto", display: "flex", justifyContent: "center", marginTop: "0px"}}>Lorem ipsum Lorem Ipsum</p>
            </div>
            <div className="servicesDiv" style={{fontSize: "medium"}}>
             <div className="contentDiv">
                <img src={img1} style={{width: "80%"}}/>
                <p>Free Trial Period</p>
             </div>
             <div className="contentDiv">
                <img src={img2} style={{width: "80%", marginTop: "40%"}}/>
                <p>No Commission only monthly subscription</p>
             </div>
             <div className="contentDiv" >
                <img src={img3} style={{width: "80%", marginTop: "80%"}}/>
                <p>Lorem ipsum lorem</p>
             </div>             
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", fontSize: "large"}}>
            <p>For more questions read our <b><u>FAQs</u></b></p>
            </div>
           <img src={maskGroupImg} style={{width: "100%", height: "100%", position: "absolute", top: "0px"}}/> 
        </div>
    )
}
