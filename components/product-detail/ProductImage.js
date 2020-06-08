import React from 'react'
import { Card, Image } from 'react-bootstrap'

class ProductImage extends React.Component {
  render() {
    return (
      <Card style={{ width: 'inherit' }}>
        <Card.Img variant='top' src='https://media3.scdn.vn/img3/2019/6_17/xEchLP_simg_b5529c_250x250_maxb.jpg' />
        <Card.Body style={styles.body}>
          <Image style={styles.image} src="https://media3.scdn.vn/img3/2019/6_17/xEchLP_simg_b5529c_250x250_maxb.jpg" width={80} />
          <Image style={styles.image} src="https://media3.scdn.vn/img3/2019/10_5/IM4rOZ_simg_b5529c_250x250_maxb.jpg" width={80} />
          <Image style={styles.image} src="https://media3.scdn.vn/img3/2019/8_7/5GikMj_simg_b5529c_250x250_maxb.jpg" width={80} />
        </Card.Body>
      </Card>
    )
  }
}
const styles = {
  body: {

  },
  image: {
    margin: 5
  }
}
export default ProductImage