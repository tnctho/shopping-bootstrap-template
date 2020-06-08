import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import AuthenticatedComp from './components/AuthenticatedComp'
import Navigation from './components/Navigation'
import { routePath } from './constants'
const HomePage = React.lazy(() => import('./pages/HomePage'))
const ProductListPage = React.lazy(() => import('./pages/ProductListPage'))
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'))
const CartPage = React.lazy(() => import('./pages/CartPage'))
const MyProfilePage = React.lazy(() => import('./pages/MyProfilePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const LogoutPage = React.lazy(() => import('./pages/LogoutPage'))
const CatePage = React.lazy(() => import('./pages/CatePage'))
//add

//end Add
function App() {
  const token = localStorage.getItem('TOKEN')
  return (
    <div>
      <Navigation />

      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path={routePath.HOME_PAGE}>
            <HomePage />
          </Route>

          <Route exact path={routePath.PRODUCT_DETAIL_PAGE}>
            <ProductDetailPage />
          </Route>
          <Route exact path={routePath.CART_PAGE}>
            <CartPage />
          </Route>
          <Route exact path={routePath.MY_PROFILE_PAGE}>
            <MyProfilePage />
          </Route>
          <Route exact path={routePath.LOGIN_PAGE}>
            <LoginPage />
          </Route>
          <Route exact path={routePath.LOGOUT_PAGE}>
            <LogoutPage />
          </Route>
          <Route exact path={routePath.PRODUCT_SEARCH_PAGE}>
            <ProductListPage />
          </Route>
          <Route exact path={routePath.CATE_PAGE + '/:slug'} component={ProductListPage} />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App
