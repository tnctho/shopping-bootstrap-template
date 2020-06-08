import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

class ProductInfo extends React.Component {
  render () {
    return (
      <Card>
        <Card.Header>Dung dịch sát khuẩn Betadine</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}
export default ProductInfo
