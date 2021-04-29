import React from 'react'
import {Media} from 'reactstrap'
import img1 from '../Assets/pizza.jpg'
export default function ItemPhoto() {
    return (
        <div className="mt-5">
            <Media >
              <Media left href="#">
              <img src={img1} style={{width: "150px", height: "150px"}}/>                 
              </Media>
              <Media body>
                <Media heading className="font-weight-bold ml-2">
                   Tomato Pizza
                </Media>
                <Media style={{marginTop: "80px"}} className="ml-2">Cheese Pizza</Media>
              </Media>
            </Media>
        </div>
    )
}
