import React from 'react';


const ShopListItemMen = ({ product }) => {
  const { name, description, price, url, prod } = product;
  // const sizes = ['S','M', 'L', 'XL'];

  // const result = sizes.map(size => {
	// return (
  //      <option className='item-select__size' key={size.index} value={size}>{size}</option>
  // )}
  // );

  if (prod === "men") {
    return (<>
        <div className="item">
          <img src={url} alt="pic" className="item-img" />
        <div className="item-content">
        <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
          {/* <div className='item-sizes'>Size: <select className="item-select">{result}</select></div> */}
          <span className="item-price">Price: <b>{price}</b>$</span>
          <br></br>
          <button className="item-button">Add to card</button>
        </div>
        </div>
        <hr className='item-line'/>
    </>)}
};

export default ShopListItemMen;
