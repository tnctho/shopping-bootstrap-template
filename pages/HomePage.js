import React from 'react'
import Content from '../components/Content';
import { Container, Row, Col } from 'react-bootstrap';
import AdSlider from '../components/home/AdSlider';
import Sale from '../components/home/Sale';
import ProductMenu from '../components/home/ProductMenu';



class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <AdSlider />
                    </Col>
                    <Col md={12}>
                        <Sale />
                    </Col>
                    <Col md={12}>
                        <ProductMenu />
                    </Col>
                </Row>

            </Container>

        )
    }
}

export default HomePage;