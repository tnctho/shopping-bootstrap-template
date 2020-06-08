import { bindActionCreators } from 'redux'
import { GET_CATE_PRODUCTS_SUCCESS, GET_SEARCH_PRODUCTS_SUCCESS } from './types'
import { cateList } from '../constants'

const initialState = {
  cate: {},
  page: 1,
  slug: '',
  products: [],
  searchString: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATE_PRODUCTS_SUCCESS:
      return { ...state, slug: action.slug, products: [...action.products], cate: cateList.find(item => item.slug === action.slug), page: action.page || 1 }
    // Tương tự, code ở đây
    case GET_SEARCH_PRODUCTS_SUCCESS:
      return { ...state, page: action.page || 1, searchString: action.searchString, products: action.json.data || [] }
    default:
      return state
  }
}

export default reducer 
