import React from 'react';


const data = [
  { product: 'men ~',
    imgMain: './img/men.jpg',
  },
  { product: 'women ~',
    imgMain: './img/women.jpg',
  },
  { product: 'for home ~',
  imgMain: './img/home.jpg',
  },
];

const ShopList = () => {

return (<div className="products">
<a className="product" href='/men'>
<p className="product-name name-men">{data[0].product}</p>
   <img className="product-img__men" src={data[0].imgMain} alt="men"/>
</a>
 
 <a className="product" href='/women'>
   <img className="product-img__women" src={data[1].imgMain} alt="women"/>
   <p className="product-name name-women">{data[1].product}</p>
 </a>

 <a className="product" href='/home'>
 <p className="product-name name-home">{data[2].product}</p>
   <img className="product-img__home" src={data[2].imgMain} alt="for home"/>
 </a>
 </div>)
  
};

export default ShopList;
