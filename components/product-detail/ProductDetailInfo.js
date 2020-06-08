import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

class ProductDetailInfo extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' style={{ marginTop: 10 }}>
        <Tab eventKey='chi-tiet-san-pham' title='CHI TIẾT SẢN PHẨM'>
          Bạn mô tả chi tiết sản phẩm ở đây
        </Tab>
        <Tab eventKey='danh-gia' title='ĐÁNH GIÁ'>
          Đánh giá sản phẩm
        </Tab>
        <Tab eventKey='hoi-dap' title='HỎI ĐÁP'>
          Hỏi đáp....
        </Tab>
      </Tabs>
    )
  }
}
export default ProductDetailInfo
