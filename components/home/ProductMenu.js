import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from './image/img1.jpg'
import img2 from './image/img2.jpg'
import img3 from './image/img3.jpg'
import img4 from './image/img4.jpg'
import img5 from './image/img5.jpg'
import './ProductMenu.css'


const proprietes = {
    duration: 500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <h5 >Các sản phẩm cho mỗi danh mục</h5>
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div >
                        <img src={img1} alt="img1" />
                        <p style={{ textAlign: "center" }} > Thời trang nữ</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <p style={{ textAlign: "center" }} > Thời trang nam</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <p style={{ textAlign: "center" }} > Sức khỏe</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <p style={{ textAlign: "center" }} > Laptop</p>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <p style={{ textAlign: "center" }} > Điện gia dụng</p>
                    </div>
                </div>
            </Slide>
        </div >
    )
}

export default Slideshow;