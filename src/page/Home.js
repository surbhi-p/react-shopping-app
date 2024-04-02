import React from 'react'
import productsData from '../data/ProductsData'
import ProductCart from '../component/ProductCart'

const Home = () => {
  return (
    <div className={['c-home']}>
      <div className={['c-home__container']}>
        {productsData.map(product => <ProductCart key={product.id} {...product} />)}
      </div>
    </div>
  )
}

export default Home