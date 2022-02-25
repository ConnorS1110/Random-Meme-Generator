import React from 'react'
import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <div className='header'>
            <img className='header-image' src={trollFace} alt="Troll Face" />
            <p className='header-name'>Meme Generator</p>
            <p className='header-info'>React Course - Project 3</p>
        </div>
    )
}
