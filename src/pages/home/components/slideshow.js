import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const SlideShow = () => {
    const slideImages = [
       'https://expertphotography.com/wp-content/uploads/2011/11/photography-beginners-image1.jpg',
       'https://post.healthline.com/wp-content/uploads/2019/05/Dancing_Dance_Female_Color-1200x628-Facebook.jpg',
       'https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg'
    ]
    const slideShowProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: <div className="cursor-pointer" style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
        nextArrow: <div className="cursor-pointer" style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
 
    }
    return(
        <div className="slide-container">
            <Slide {...slideShowProperties}>
                <div className="each-slide relative pt-30vh xs:pt-50vh md:pt-46vh  xl:pt-60vh">
                    <img className="absolute top-0 object-cover w-full h-full" src={slideImages[0]} alt="slide1"/>
                </div>
                <div className="each-slide relative pt-30vh xs:pt-50vh md:pt-46vh xl:pt-60vh ">
                     <img className="absolute top-0 object-cover w-full h-full" src={slideImages[1]}alt="slide2"/>
                </div>
                <div className="each-slide relative pt-30vh xs:pt-50vh md:pt-46vh xl:pt-60vh ">
                    <img className="absolute top-0 object-cover w-full h-full" src={slideImages[2]} alt="slide3"/>
                </div>
            </Slide>
      </div>
    )
}

export default SlideShow;