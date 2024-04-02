import React from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/CartSlice';

const Cart = () => {
  const {isCartOpen, cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const parent = document.body;
  const modalItem = (item) => <div className={['c-cart__item']}>
                      <img className={['c-cart__item-img']} src={item.img} alt='' />
                      <div className={['c-cart__item-details']}>
                        <div className={['c-cart__item-title']}></div>
                        <div className={['c-cart__item-price']}></div>
                      </div>
                      <div className={['c-cart__item-quantity']}></div>
                      <div className={['c-cart__item-removeall']}></div>
                    </div>
  const modalContent = (cartItems.length === 0) ? "Cart is Empty" : 
                        <div className={['c-cart__list']}></div>
  const modal = <div className={['c-cart']}>
                <div className={['c-cart__modal']}>
                <div className={['c-cart__modal-header']}>
                  <div className={['c-cart__modal-hcount']}>Cart({cartItems.length})</div>
                  <div onClick={() => dispatch(toggleCart())} className={['c-cart__modal-close']}><span>&times;</span></div>
                </div>
                  <div className={['c-cart__modal-content']}>{modalContent}</div>
                  <div className={['c-cart__modal-fwrap']}>
                    <div className={['c-cart__modal-footer']}>
                      <div className={['c-cart__modal-total']}>
                        Total: <span className={['-highlight']}>₹ 0</span>
                      </div>
                      <button className={['c-cart__modal-checkout']}>Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
  if(isCartOpen){
    parent.classList.add('-overflow_hide')
    return createPortal(modal, parent)
  } else {
    parent.classList.remove('-overflow_hide');
  }
}

export default Cart