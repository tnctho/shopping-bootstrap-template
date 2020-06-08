import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { CaretRightFill } from 'react-bootstrap-icons'

class PriceRangeForm extends React.Component {
  render () {
    return (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control type='number' />
          </Col>
          <Col md={2}>
            <Button variant='default' disabled>
              <CaretRightFill />
            </Button>
          </Col>
          <Col>
            <Form.Control type='number' />
          </Col>
          <Col  md={2}>
            <Button>
              <CaretRightFill />
            </Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}
export default PriceRangeForm
