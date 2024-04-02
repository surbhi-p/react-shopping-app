import React from 'react';
import BagIcon from '../asset/images/bag-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/CartSlice';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={['c-header']} >
      <div className={['c-header__left']}>Shopping Cart</div>
      <div onClick={()=> dispatch(toggleCart())} className={['c-header__right']}>
        <img src={BagIcon} alt='go to cart' />
        <div className={['c-header__count']}>{cart.cartItems && cart.cartItems.length}</div>
      </div>
    </div>
  )
}

export default Header