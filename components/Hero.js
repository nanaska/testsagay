import Image from "next/image"
import HeroImage from "../public/HeroImage.png"
export default function Hero(){
    return(<div className="mt-16 md:mt-0">

        <div className="carousel w-full max-h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <Image src={HeroImage} width={1920} height={1080}/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Image src={HeroImage} width={1920} height={480}/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item  relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 dy left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn  btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    </div>)
}