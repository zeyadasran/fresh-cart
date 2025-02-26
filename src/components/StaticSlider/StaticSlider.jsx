import React, { useEffect, useState } from 'react'
import styles from './StaticSlider.module.css'
import Slider from 'react-slick';
import slide1 from '../../assets/images/slider-image-1.jpeg'
import slide2 from '../../assets/images/slider-image-2.jpeg'
import slide3 from '../../assets/images/slider-image-3.jpeg'
import static1 from '../../assets/images/grocery-banner.png'
import static2 from '../../assets/images/grocery-banner-2.jpeg'

import axios from 'axios';
export default function StaticSlider() {
    let[count,setCount]=useState(0)
  
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    useEffect(()=>{

    })
  return (


    <div className='main-layout'>
        <div className="w-9/12">
        <Slider {...settings}>
    <img src={slide1} className= {styles.main} alt="" />
    <img src={slide2} className= {styles.main} alt="" />
    <img src={slide3} className= {styles.main} alt="" />
   
    </Slider>
        </div>
        <div className="w-3/12">
        <img src={static1} className='h-[300px]' alt="" />
        <img src={static2} className='h-[300px]' alt="" />
        </div>
        
    
    </div>
  )
}
