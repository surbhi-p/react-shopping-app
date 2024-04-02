import React from 'react'
import { useDispatch } from 'react-redux'

import { addItem } from '../store/slices/CartSlice'

const ProductCart = (prop) => {
  const {id, img, rating, title, price} = prop
  const dispatch = useDispatch()
  return (
    <div key={id} className={['c-product-cart']}>
      <img className={['c-product-cart__image']} src={img} alt='' />
      <div className={['c-product-cart__rating']}>{rating}</div>
      <div className={['c-product-cart__title']}>{title}</div>
      <div className={['c-product-cart__price']}>₹ {price}</div>
      <button onClick={() => dispatch(addItem(prop))} className={['c-product-cart__add']}>Add to cart</button>
    </div>
  )
}

export default ProductCart