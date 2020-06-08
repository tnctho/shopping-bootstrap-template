import React from 'react'
import { Carousel } from 'react-bootstrap'

class AdSlider extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://media3.scdn.vn/img4/2020/05_20/lcHNHFBiYttKtEtkf96L.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://media3.scdn.vn/img4/2020/05_20/wEdHhe442tKID26Vr6np.png'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://media3.scdn.vn/img4/2020/05_20/85ZeLebjxFGGFX0V6ifL.png'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://media3.scdn.vn/img4/2020/05_29/OtmLQNWOVggtKfoImVxF.png'
              alt='Forth slide'
            />
            <Carousel.Caption>
              <h3>Forth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </>
    )
  }
}
export default AdSlider