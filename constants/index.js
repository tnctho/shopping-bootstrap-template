import { FileMinus } from 'react-bootstrap-icons'

export const routePath = {
  HOME_PAGE: '/',
  PRODUCT_SEARCH_PAGE: '/search',
  CATE_PAGE: '/:id',
  PRODUCT_DETAIL_PAGE: '/product-detail',
  CART_PAGE: '/cart',
  MY_PROFILE_PAGE: '/my-profile',
  LOGIN_PAGE: '/login',
  LOGOUT_PAGE: '/logout'
}

export const cateList = [
  { name: 'Thời trang nữ', slug: 'thoi-trang-nu' },
  { name: 'Thời trang nam', slug: 'thoi-trang-nam' },
  { name: 'Sức khỏe', slug: 'thiet-bi-y-te' },
  { name: 'Làm đẹp', slug: 'my-pham' },
  { name: 'Giày dép', slug: 'giay-dep' },
  { name: 'Túi xách', slug: 'tui-xach' },
  { name: 'Đồng hồ', slug: 'dong-ho-phu-kien' },
  // các bạn thêm nhiều danh mục nữa ở đây
  { name: 'Điện thoại', slug: 'thiet-bi-di-dong' },
  { name: 'Laptop', slug: 'laptop' },
  { name: 'Phụ kiện công nghệ', slug: 'phu-kien-cong-nghe' },
  { name: 'Điện gia dụng', slug: 'do-dien-gia-dung' },
  { name: 'Điện máy', slug: 'dien-may' },
  { name: 'Nhà cửa', slug: 'do-dung-trong-nha' },
  { name: 'Ti vi', slug: 'tivi-thiet-bi-giai-tri' },
  { name: 'Âm thanh', slug: 'thiet-bi-am-thanh' },
  { name: 'Camera', slug: 'may-anh-may-quay-phim' },
  { name: 'Mẹ và Bé', slug: 'me-va-be' },
  { name: 'Văn phòng phẩm', slug: 'van-phong-pham' },
]

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
