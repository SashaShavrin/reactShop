import React from 'react';


const CartListItem = ({ cart, addProductInCart, removeProductFromCart, deletePurchasedProduct }) => {
  const { name, url, count, totalPrice, id, sizes } = cart;

  return (<>
    <div className="cart-list-item">
          <img src={url} alt="pic" className="cart-list-item__image"/>
          <div className='cart-list-item__main'>
          <h4 className='cart-list-item__name'>{name}</h4>
          <h4 className='cart-list-item__name'>{sizes}</h4>
          <p className="cart-list-item__total-price">Price: <b>{totalPrice}</b>$</p>
          </div>
      <div className='cart-list-item__content'>
        <button className="button-cart" onClick={() => addProductInCart(id)}>+</button>
        <span className="cart-list-item__count">{count} piece</span>
        <button className="button-cart" onClick={() => removeProductFromCart(id)}>-</button>
      </div>
      <button className="cart-list-item__delete" onClick={() => deletePurchasedProduct(id)}>Delete</button>
      </div>
  </>)
};

export default CartListItem;
