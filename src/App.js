import React, { Component } from "react";
import { products } from "./products";
import CartList from "./cart-list";
import ShopList from "./shop-list";
import ShopListMen from './shop-list-men'
import ShopListWomen from './shop-list-women'
import ShopListHome from './shop-list-home'
import Navigation from "./navigation";
import { Route, Routes } from "react-router-dom";

const updateCartList = (cartList, newProduct, index) => {
  if (newProduct.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }
  if (index === -1) {
    return [...cartList, newProduct];
  }
  return [...cartList.slice(0, index), newProduct, ...cartList.slice(index + 1)];
};

const updateProduct = (getProduct, productInCart, quantity) => {
  if (productInCart) {
    return {
      ...productInCart,
      totalPrice: productInCart.totalPrice + quantity * getProduct.price,
      count: productInCart.count + quantity
    };
  }
  return {
    id: getProduct.id,
    name: getProduct.name,
    url: getProduct.url,
    totalPrice: getProduct.price,
    count: 1,
    sizes: getProduct.sizes,
  };
};

export default class App extends Component {
  state = {
    cartList: []
  };
  addProductInCart = (id) => {
    const { cartList } = this.state;
    this.setState(() => {
      const getProduct = products.find((product) => product.id === id);
      const getProductIndex = cartList.findIndex((product) => product.id === id);
      const productInCart = cartList[getProductIndex];
      const newProduct = updateProduct(getProduct, productInCart, 1);
      const newArray = updateCartList(cartList, newProduct, getProductIndex);
      return {
        cartList: newArray
      };
    });
  };

  removeProductFromCart = (id) => {
    const { cartList } = this.state;
    this.setState(() => {
      const getProduct = products.find((product) => product.id === id);
      const getProductIndex = cartList.findIndex((product) => product.id === id);
      const productInCart = cartList[getProductIndex];
      const newProduct = updateProduct(getProduct, productInCart, -1);
      const newArray = updateCartList(cartList, newProduct, getProductIndex);
      return {
        cartList: newArray
      };
    });
  };

  deletePurchasedProduct = (id) => {
    const { cartList } = this.state;
    this.setState(() => {
      const getProduct = products.find((product) => product.id === id);
      const getProductIndex = cartList.findIndex((product) => product.id === id);
      const productInCart = cartList[getProductIndex];
      const newProduct = updateProduct(getProduct, productInCart, -productInCart.count);
      const newArray = updateCartList(cartList, newProduct, getProductIndex);
      return {
        cartList: newArray
      };
    });
  };

  render() {
    return (<>
        <Navigation />
      <main className="container">
          <Routes>
        <Route path="/" exact={true} element = {<ShopList />}
        />
         <Route path="/men" exact={true} element = {
          <ShopListMen 
          products={products} 
          addProductInCart={this.addProductInCart}/>}
        />
         <Route path="/women" exact={true} element = {
          <ShopListWomen 
          products={products} 
          addProductInCart={this.addProductInCart}/>}
        />
         <Route path="/home" exact={true} element = {
          <ShopListHome 
          products={products} 
          addProductInCart={this.addProductInCart}/>}
        />
        <Route path="/cart-list" exact={true}element={
          <CartList
          cartList={this.state.cartList}
          addProductInCart={this.addProductInCart}
          removeProductFromCart={this.removeProductFromCart}
          deletePurchasedProduct={this.deletePurchasedProduct}/>}
        />
        </Routes>
      </main>
      </>);
  }
}