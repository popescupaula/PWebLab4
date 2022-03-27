import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import questionVideo from '../assets/questionmark.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={questionVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>MIND SPORTS</h1>
                <p>Everyone loves sport. And everyone loves a quiz.</p>
                <div>
                    <Link to='/aboutUs' className='btn'>About Us</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
