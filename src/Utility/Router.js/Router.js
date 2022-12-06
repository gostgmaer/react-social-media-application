import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import Cart from "../../Pages/Cart/Cart";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Homepage/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Product from "../../Pages/Product/Product";
import Products from "../../Pages/Products/Products";
import Profile from "../../Pages/Profile/Profile";
import Signup from "../../Pages/Signup/Signup";
import Wishlist from "../../Pages/Wishlist/Wishlist";

const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Products></Products>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
        <Route path="/product/category/:id" element={<Category></Category>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default Router;
