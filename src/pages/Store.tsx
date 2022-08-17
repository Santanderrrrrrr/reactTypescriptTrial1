import React from 'react'
import storeItems from '../data/items.json'
import { Row, Col } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'

const Store = () => {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item, idx)=>(
          <Col key={idx}><StoreItem {...item}/></Col>
        ))}
        
      </Row>
    </>
  )
}

export default Store