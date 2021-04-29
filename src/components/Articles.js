import React from 'react'
import rectangle from '../Assets/Rectangle 424.svg'
import img1 from '../Assets/Group 957/Group 957.png'
import img2 from '../Assets/Group 956/Group 956.png'
import img3 from '../Assets/Group 955/Group 955.png'
import img4 from '../Assets/Group 954/Group 954.png'
import LeftArticle from './LeftArticle'
import RightArticle from './RightArticle'
export default function Articles() {
    const imagesArray = [img1, img2, img3, img4]
    const renderElements = imagesArray.map((img, index) => {
        if(index%2 == 0) return <LeftArticle lineImg = {rectangle} img = {img}/>
        else return <RightArticle lineImg = {rectangle} img = {img}/>
    })

    return (
        <div >
            <div style={{display: "flex", justifyContent: "center"}}>
                <header style={{font: "normal normal bold xx-large Roboto", marginTop: "15px"}}>
                    Lorem ipsum Lorem Ipsum
                </header>
            </div>
            {
                renderElements
            }
        
        </div>
    )
}
