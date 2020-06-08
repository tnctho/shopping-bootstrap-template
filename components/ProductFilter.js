import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import PriceRangeForm from './product-filter/PriceRangeForm'
import PriceRangeOptions from './product-filter/PriceRangeOptions'

class ProductFilter extends React.Component {
  render () {
    return (
      <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              Đã Lọc
            </Accordion.Toggle>
          <Accordion.Collapse eventKey='0' in={true}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Theo Giá Khoảng
            </Accordion.Toggle>
          <Accordion.Collapse eventKey='1' in={true}>
            <Card.Body>
                <PriceRangeForm/>
                <PriceRangeOptions/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              Thêm filter
            </Accordion.Toggle>
          <Accordion.Collapse eventKey='2' in={true}>
            <Card.Body>
                Bạn thêm filter ở đây
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}

export default ProductFilter