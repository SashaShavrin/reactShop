import React from 'react';
import ShopListItemHome from "../shop-list-item-home";

const ShopListHome = ({  products, addProductInCart }) => {

    return (<>
      <section className="shop-list">
      <img className='shop-list__category' src='./img/home.jpg' alt='pic'/>
        <h1 className='shop-list__logo'>FOR HOME ~</h1>
        <ul className="shop-list__list">
          {
            products.map((product) => {
              const { id } = product;
              return (
                <li key={id.toString()}
                    className="shop-list__item"
                    onClick={() => addProductInCart(id)}
                >
                  <ShopListItemHome product={product} />
                </li>
              )
            })
          }
        </ul>
      </section>
      </>)
  
};

export default ShopListHome;
