import React from 'react'
import {
  Button,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import slugify from 'react-slugify';
import { PeopleCircle } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { cateList, routePath } from '../constants';
import history from '../history';
import { getCateProducts } from '../redux/actions';
import { getSearchProducts } from '../redux/actions';

class Navigation extends React.Component {

  componentDidMount() {
    this.getData(this.state.page, '')
  }
  state = {
    page: 1,
    q: '',
    searchString: '',
  }

  getData = (page, searchString) => {
    this.props.getSearchProducts({
      page,
      searchString: slugify(searchString),
    });
    // fetch(`http://localhost:4000/search?p=${p}&&q=${slugify(q)}`)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log({ json });
    //     this.setState({ searchString: q })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
  }



  handleRedirect = slug => () => {
    if (window.location.href.includes('/cate')) this.props.getCateProducts(slug)
    history.push('/cate/' + slug)
  }

  handleChange = event => {
    this.setState({ q: event.target.value })
  }

  handleSearch = event => {

    this.setState({ page: 1, })
    this.getData(1, this.state.q)
  }

  render() {

    const token = localStorage.getItem('TOKEN')
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand
          as={Link}
          to='/'
        >
          <Image src='/logo.png' width='100' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <NavDropdown title='Danh mục' id='basic-nav-dropdown'>
              {Array.isArray(cateList) &&
                cateList.map(cate => (
                  <NavDropdown.Item
                    key={cate.slug}
                    active={this.props.cate && this.props.cate.slug === cate.slug}
                    onClick={this.handleRedirect(cate.slug)}
                    href='javascript:void(0)'
                  >
                    {cate.name}
                  </NavDropdown.Item>
                ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Tất cả danh mục
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Nhập từ khóa tìm kiếm'
              className='mr-sm-2'
              onChange={this.handleChange}
            />
            <Button variant='outline-success' onClick={this.handleSearch}>Tìm</Button>

          </Form>
          <Nav className='mr-auto' />
          <Nav>
            <Nav.Link
              as={Link}
              to='/cart'
            >
              <Image src='/images/cart.png' width='20' />
            </Nav.Link>
            {token ? (
              <React.Fragment>
                <Nav.Link as={Link} to={routePath.MY_PROFILE_PAGE}>
                  <PeopleCircle />
                </Nav.Link>
                <Nav.Link href='#deets'>Đăng xuất</Nav.Link>
              </React.Fragment>
            ) : (
                <Nav.Link as={Link} to='/login'>
                  Đăng nhập
                </Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export const apis = {
  BASE_URL: 'http://localhost:4000',
  getCateProductApi: function (slug, page = 1) {
    return this.BASE_URL + `/cat/${slug}?p=${page}`
  },
  getSearchProductApi: function (page, query) {
    return this.BASE_URL + `/search?p=${page}&q=${query}`
  },
  getProductDetailApi: function (id) {
    return this.BASE_URL + `/detail/${id}`
  },
  getLoginApi: function () {
    return this.BASE_URL + '/login'
  },
  getLogoutApi: function () {
    return this.BASE_URL + '/logout'
  }
}

const mapStateToProps = state => ({
  cate: state.cate,
  ProductList: state.ProductList
})

const mapDispatchToProps = dispatch => ({
  getCateProducts: slug => dispatch(getCateProducts(slug)),
  getSearchProducts: searchOption => dispatch(getSearchProducts(searchOption)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
