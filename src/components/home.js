import React from 'react'
import  group from '../Assets/Group 958/Group958.png'
import logo from '../Assets/Component 5 – 69/Component 5 – 69.png'
export default function home({setNewPage, newPage}) {
    return (
        <div style={{width: "100%" }}> 
            <div >
              <img src={logo} className="logo"></img> 
            </div>
            <div className="group-div">
                <button className="group-button" onClick={()=>setNewPage(!newPage)}>Register as Chef</button>
            </div>
           <img src={group} className="group"/>
        </div>
    )
}
