import React from 'react'
import { Card, Button } from 'react-bootstrap'
import history from '../../history'
import { Link } from 'react-router-dom'

class ProductCard extends React.Component {
  handleClick = id=> () =>{
    history.push('/product-detail?id='+id)
  }
  render () {
    const {product} = this.props;
    return (
      <Card style={styles.root} >
        <Card.Img variant='top' src={product.img_url} onClick={this.handleClick('123456')}/>
        <Card.Body>
          <Card.Title as={Link} to='/product-detail?id=123456'>${product.name}</Card.Title>
          <Card.Text style={{color: "red", fontWeight: 'bold'}}>
            {product.price}đ
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

const styles = {
  root: {
    margin: 5,
    width: '18rem'
  }
}

export default ProductCard
