import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { singleproduct } from "../../Assets/Data/Data";
import { removefromCart, resetCart } from "../../REDUX/CartReducer";
import "./CartComponent.scss";
import {loadStripe} from '@stripe/stripe-js';
import axios from "axios";
import InvokeAPI from "../../APICALL/apicall";

const CartComponent = () => {
  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch()
  const stripePromise = loadStripe('pk_test_3gNo6PibrKriBblqL7NTIaP400RbvEv5Os');
  const handlePayment = async ()=>{
    console.log(products);
    try {
      const stripe  = await stripePromise;
      const res = await InvokeAPI('orders','post',{products:products},'','','')
      await stripe.redirectToCheckout({
        sessionId:res.data.strapeSession.id
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  const total = ()=>{
    let total = 0
    products.forEach(element => {
      total+=element.quantity*element.price
      
    });
    return total.toFixed(2);
  }


  console.log(products);


  const cartWrapper= ()=>{
   return <React.Fragment>
     <h2>Product in your cart</h2>
      {products?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={`http://localhost:1337${item.image}`} alt="" />
            <div className="details">
              <h3>{item.title}</h3>
              <p>{item["desc"].substring(0, 50)}</p>
              <div className="price"> {item.quantity} X ${item["price"]} </div>
            </div>
            <div className="delete" onClick={()=>dispatch(removefromCart(item.id))} ><MdDelete ></MdDelete></div>
          </div>
        );
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$ {total()}</span>
      </div>
      <button className="checkout"  onClick={handlePayment} > CheckOut Product </button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
   </React.Fragment>
  }



  return (
    <div className="CartComponent">
      { products.length?cartWrapper():<div>Your Cart is empty Please add a Item</div> }
    </div>
  );
};

export default CartComponent;
