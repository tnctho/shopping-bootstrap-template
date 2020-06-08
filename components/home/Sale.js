import React, { Component } from 'react';
import './Sale.css';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: 'photo1',
        url: 'https://media3.scdn.vn/img4/2020/05_31/KY6JTW8DykWA2CMNNiWW.png',
        title: 'Gia dụng 69K'
    },
    {
        name: 'photo2',
        url: 'https://media3.scdn.vn/img4/2020/05_25/oGGW3Zwz82ZJEuCDqxvk.png',
        title: 'Giao hàng 3H'
    },
    {
        name: 'photo3',
        url: 'https://media3.scdn.vn/img4/2020/05_08/3TUtgyNb4AZE1rYNDUwC.png',
        title: 'Vé máy bay rẻ'
    },
    {
        name: 'photo4',
        url: '//media3.scdn.vn/img4/2020/05_31/McaP6sNSvkQhr8EQdVbr.png',
        title: 'Thời trang 16K'
    },
    {
        name: 'photo5',
        url: 'https://media3.scdn.vn/img4/2020/04_25/MlWwB2oQIBGFPEslhEaH.png',
        title: 'Tiêu dùng'
    },
    {
        name: 'photo6',
        url: 'https://media3.scdn.vn/img4/2020/05_13/klyraDhLlnm7dpRTHh3o.gif',
        title: 'Mã giảm giá'
    },
    {
        name: 'photo7',
        url: 'https://media3.scdn.vn/img3/2019/9_16/swFByy.png',
        title: 'Nạp tiền ĐT'
    },
    {
        name: 'photo8',
        url: 'https://media3.scdn.vn/img3/2019/9_16/3o4yxy.png',
        title: 'Thanh toán HĐ'
    },
    {
        name: 'photo9',
        url: 'https://media3.scdn.vn/img4/2020/05_15/UL38P6t2rQum9pDod457.png',
        title: 'Học online'
    },
    {
        name: 'photo10',
        url: 'https://media3.scdn.vn/img4/2020/05_15/KoFvUnYkCvYZ05KGZ4GX.png',
        title: 'Săn xu & Ưu đãi'
    },
]
class Sale extends Component {
    render() {
        const settings = {
            dots: true,
            fade: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3,
            arrows: true,
            className: 'slides'
        };
        return (
            <div className="App" >
                <h5>Các khuyến mãi</h5>
                <Slider {...settings}>
                    {
                        photos.map((photo) => {
                            return (
                                <div>
                                    <a><img width="100" text-align="center" src={photo.url} /><p>{photo.title}</p></a>

                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}
export default Sale;