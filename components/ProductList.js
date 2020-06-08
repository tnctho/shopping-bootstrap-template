import React from 'react'
import ListHeader from './product-list/ProductCard'
import { Card, Button, Dropdown, DropdownButton, Pagination } from 'react-bootstrap'
import ProductCard from './product-list/ProductCard'
import { connect } from 'react-redux';


class ProductList extends React.Component {

  render() {
    const { products, title } = this.props;
    return (
      <Card>
        <Card.Header style={styles.cardHeader}>
          <h5>
            {title}&nbsp;
            <small>
              (<span style={{ color: 'red' }}>{products.length}</span> Sản phẩm)
            </small>
          </h5>
          <DropdownButton
            style={styles.sortBtn}
            id='dropdown-basic-button'
            title='Lọc'
            size='sm'
          >
            <Dropdown.Item href='#/action-1'>Giá giảm</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Giá tăng</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>A-Z</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Z-A</Dropdown.Item>
          </DropdownButton>
        </Card.Header>
        <Card.Body>
          <div style={styles.list}>
            {Array.isArray(products) && products.map(product => <ProductCard product={product} key={product.product_id} />)}
          </div>
          <Pagination>
            <Pagination.Item onClick={this.props.onClickBack}>Back</Pagination.Item>
            <Pagination.Item onClick={this.props.onClickNext}>Next</Pagination.Item>
          </Pagination>
        </Card.Body>
        <Card.Footer className="text-center">

        </Card.Footer>
      </Card>
    )
  }
}

const styles = {
  cardHeader: {
    display: 'flex'
  },
  sortBtn: {
    marginLeft: 'auto'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }
}

const mapStateToProps = state => ({
  products: state.products
})


export default connect(mapStateToProps)(ProductList)
