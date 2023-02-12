import React from 'react';
import ShopListItemMen from "../shop-list-item-men";

const ShopListMen = ({  products, addProductInCart }) => {

    return (<>
      <section className="shop-list">
        <img className='shop-list__category' src='./img/men.jpg' alt='pic'/>
        <h1 className='shop-list__logo'>MEN ~</h1>
        <ul className="shop-list__list">
          {
            products.map((product) => {
              const { id } = product;
              return (
                <li key={id.toString()}
                    className="shop-list__item"
                    onClick={() => addProductInCart(id)}
                >
                  <ShopListItemMen product={product} />
                </li>
              )
            })
          }
        </ul>
      </section>
      </>)
  
};

export default ShopListMen;
