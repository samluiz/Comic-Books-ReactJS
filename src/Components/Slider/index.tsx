import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Miles from '/public/img/Miles Morales.jpg'
import Panther from '/public/img/Black Panther.jpg'
import Moon from '/public/img/Moon.jpg'

const Slider: React.FC = () => {
    return (
        <>
            <Carousel
                useKeyboardArrows
                showThumbs={false}
                infiniteLoop
                autoPlay
                dynamicHeight
                className="mt-6"
            >
                <div className="bg-black">
                    <img
                        src={Miles}
                        alt=""
                        className=" saturate-0 opacity-40"
                    />
                    <p>Black Heroes</p>
                </div>
                <div className="bg-black">
                    <img
                        src={Panther}
                        alt=""
                        className=" saturate-0 opacity-40"
                    />
                    <p>Heroes in Black</p>
                </div>
                <div className="bg-black">
                    <img src={Moon} alt="" className=" saturate-0 opacity-40" />
                    <p>Black in Heroes</p>
                </div>
            </Carousel>
        </>
    )
}

export default Slider
