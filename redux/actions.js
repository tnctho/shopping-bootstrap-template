import {
  GET_CATE_PRODUCTS_START,
  GET_CATE_PRODUCTS_SUCCESS,
  GET_CATE_PRODUCTS_FAILURE,
  GET_PRODUCT_LIST,
  GET_SEARCH_PRODUCTS_SUCCESS
} from './types'
import { apis } from '../constants'

export const getCateProductsStart = () => ({
  type: GET_CATE_PRODUCTS_START
})

export const getCateProductsSuccess = (slug, products, page) => ({
  type: GET_CATE_PRODUCTS_SUCCESS,
  slug,
  products,
  page
})

export const getSearchProductsSuccess = (page, json, searchString) => ({
  type: GET_SEARCH_PRODUCTS_SUCCESS,
  page,
  json,
  searchString,
})

export const getCateProductsFailure = () => ({
  type: GET_CATE_PRODUCTS_FAILURE
})

export const getCateProducts = (slug, page) => {
  return dispatch => {
    return fetch(apis.getCateProductApi(slug, page))
      .then(res => res.json())
      .then(json => {
        dispatch(getCateProductsSuccess(slug, json.data, page))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const getSearchProducts = (searchOption) => {
  return dispatch => {
    return fetch(apis.getSearchProductApi(searchOption.page, searchOption.searchString))
      .then(res => res.json())
      .then(json => {
        dispatch(getSearchProductsSuccess(searchOption.page, json, searchOption.searchString))
      })
      .catch(err => {
        console.error(err)
      })
  }
}