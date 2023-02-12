import React from "react";
import CartListItem from "../cart-list-item";




const CartList = ({
  cartList,
  addProductInCart,
  removeProductFromCart,
  deletePurchasedProduct
}) => {
 
  return (<div className="basket">
    <button className="basket-btn">Pay</button>  
    <ul className="cart-list">
      {cartList.map((cart) => {
        const { id } = cart;
        return (
          <li key={id} className="cart-list-items">
            <CartListItem
              cart={cart}
              addProductInCart={addProductInCart}
              removeProductFromCart={removeProductFromCart}
              deletePurchasedProduct={deletePurchasedProduct}
            />
            <hr className="item-line"/>
          </li>
          );
      })
      }
    </ul>
    </div>)
};

export default CartList;
