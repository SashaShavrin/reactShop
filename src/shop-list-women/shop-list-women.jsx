import React from 'react';
import ShopListItemWomen from "../shop-list-item-women";

const ShopListWomen = ({  products, addProductInCart }) => {

    return (<>
      <section className="shop-list">
      <img className='shop-list__category' src='./img/women.jpg' alt='pic'/>
        <h1 className='shop-list__logo'>WOMEN ~</h1>
        <ul className="shop-list__list">
          {
            products.map((product) => {
              const { id } = product;
              return (
                <li key={id.toString()}
                    className="shop-list__item"
                    onClick={() => addProductInCart(id)}
                >
                  <ShopListItemWomen product={product} />
                </li>
              )
            })
          }
        </ul>
      </section>
      </>)
  
};

export default ShopListWomen;
