import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleproduct } from "../../Assets/Data/Data";
import { FaBalanceScale, FaCartPlus } from "react-icons/fa";
import { MdCompare, MdFavorite } from "react-icons/md";
import InvokeAPI from "../../APICALL/apicall";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../REDUX/CartReducer";
const Product = () => {
  const [selectImage, setSelectImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setloading] = useState(true);
  const [product, setProduct] = useState();
const dispatch = useDispatch()
  const productID = Number(useParams().id);
  console.log(productID);

  useEffect(() => {
   
    apicall()
    console.log(product);
  }, [productID]);
  
  const apicall = async ()=>{
      const res = await InvokeAPI(`products/${productID}`,'get','','',{populate:'*'},'')
      //  console.log(res);
    
      setProduct(res.data)
      setloading(false)
      console.log(product);
      // console.log(products);
  }



  let pro={}
if (product?.attributes) {
   pro = product?.attributes
}
 



  return (
    <div className="Product">
      <div className="left">
        <div className="images">
          {
           
           product?.attributes?.media.data?.map((image,index)=>{

            console.log(image.index);

            return  <img
            src={`http://localhost:1337${image.attributes.formats.medium.url}`}
            key={image.id}
            alt={image.attributes.formats.medium.name}
            onClick={(e) => setSelectImage(index)}
          />

           })
            
             
          
            }
        </div>
        <div className="mainImage">
         
          <img src={`http://localhost:1337${product?.attributes?.media?.data[selectImage].attributes.formats.medium.url}`} alt={product?.attributes?.media.data[selectImage].attributes.formats.medium.name} />
        </div>
      </div>

      <div className="right">
        <h2>{pro.ttile}</h2>
        <div className="productPrice"><span className="regular">${pro.regular_price}</span> <span className="sale"> ${pro.sale_price}</span></div>
        <p>
        
         {pro.desc}
        </p>
        <div className="quantity">
          <button
            onClick={(e) => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button onClick={()=>dispatch(addToCart({id:product.id,title:pro.ttile,desc:pro.desc,image:product?.attributes?.media.data[0].attributes.formats.medium.url,price:pro.sale_price,quantity}))} className="addToCart">
          <FaCartPlus></FaCartPlus> Add to Cart
        </button>
        <div className="links">
          <div className="item">
            <MdFavorite></MdFavorite> Add to Wishlist
          </div>
          <div className="item">
            <FaBalanceScale></FaBalanceScale> Add to Compare
          </div>
        </div>
        <div className="info">
          <span>A perfect pair for your aerobic workout session.</span>
          <span>
            {" "}
            The high-quality durable textile upper is easy to maintain.
          </span>
          <span> The rubber sole provides traction on most surfaces.</span>
          <span>
            {" "}
            You can wear it with a polyester T-shirt and a pair of trackpants.
          </span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQs</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
