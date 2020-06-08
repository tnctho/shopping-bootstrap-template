import React from 'react'
import Content from '../components/Content'
import { Row, Col, Container } from 'react-bootstrap'
import ProductFilter from '../components/ProductFilter'
import ProductList from '../components/ProductList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCateProducts } from '../redux/actions'

class ProductListPage extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      const { slug } = this.props.match.params
      this.props.getCateProducts(slug)
    }
  }
  handleClickNext = () => {
    const { slug } = this.props.match.params
    this.props.getCateProducts(slug, this.props.page + 1)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <ProductFilter />
          </Col>
          <Col>
            <ProductList onClickNext={this.handleClickNext} products={this.props.products} title={this.props.cate.name} />
          </Col>
        </Row>
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products,
  cate: state.cate,
  page: state.page,
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getCateProducts }, dispatch)
  // TODO: map action here
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
