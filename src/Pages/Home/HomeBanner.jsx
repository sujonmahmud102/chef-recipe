import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const HomeBanner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )


    return (
        <div className="relative">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img className="lg:w-full h-84 md:h-screen" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img className="lg:w-full h-84 md:h-screen" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141342.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img className="lg:w-full h-84 md:h-screen" src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1683127349~exp=1683127949~hmac=3f0d6edd2a288f572083576a181fad2513b8248eb5405deb2b04872de7941857" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img className="lg:w-full h-84 md:h-screen" src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=996&t=st=1683127384~exp=1683127984~hmac=ce1ddf867110570bc57e9730d5b9f1f1f76496738377c2c6a06f187428c8647d" alt="" />
                </div>

            </div>
            <div className="text-center text-white absolute top-14 left-[2rem] sm:top-20 sm:left-[6rem] lg:top-40 lg:left-[26rem] bg-gray-900 p-2 sm:p-4 lg:p-8 rounded-md sm:rounded-lg lg:rounded-xl">
                <h4 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium">
                    Enjoy Your Food Restaurant
                </h4>
                <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-8xl font-semibold my-2">
                    Fresh & Tasty
                </h1>
                <p className="text-xs sm:text-md lg:text-lg font-thin">
                    Explore recipes with natural cheese for delicious meals, <br /> appetizers, desserts, and snacks.
                </p>
            </div>
        </div>
    );
};

export default HomeBanner;