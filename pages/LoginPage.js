import React from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import history from '../history'

class LoginPage extends React.Component {
  componentWillMount(){
    const token = localStorage.getItem('TOKEN')
    if(token)
      history.push('/')
  }
  render () {
    return (
      <Container>
        <Row>
          <Col off md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>Đăng Nhập</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                  </Form.Group>

                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>

                  <Button variant='primary' type='submit'>
                    Đăng nhập
                  </Button>
                  <Button
                    variant='default'
                    type='reset'
                    style={styles.resetBtn}
                  >
                    Xóa hết
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const styles = {
  resetBtn: {
    marginLeft: 15
  }
}

export default LoginPage
