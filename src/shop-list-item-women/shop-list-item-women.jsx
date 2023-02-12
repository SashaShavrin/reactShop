import React from 'react';

const ShopListItemWomen = ({ product }) => {
  const { name, description, price, url, prod } = product;
  if (prod === "women") {
    return (<>
      <div className="item">
        <img src={url} alt="pic" className="item-img" />
      <div className="item-content">
      <h3 className="item-name">{name}</h3>
        <p className="item-description">{description}</p>
        <span className="item-price">Price: <b>{price}</b>$</span>
        <br></br>
        <button className="item-button">Add to card</button>
      </div>
      </div>
      <hr className='item-line'/>
  </>)}
};

export default ShopListItemWomen;
