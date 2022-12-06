import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.scss'
const ProductCard = ({ media,ttile,desc,product_type,regular_price,sale_price,isnew,id
}) => {
 
  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="card">
        <div className="image">
          {isnew?<span className="newsesson">New Session</span>:''}
          {media?.['data'].map((image)=>{
           
            const {medium,large,small}=image['attributes']['formats']
           return <img  className={`mainImage${image.id}`} src={`http://localhost:1337${medium.url}`} key={image.id} alt={image.attributes.name} />
          })}
        </div>
        <h4>{ ttile? ttile.substring(0,20):''}</h4>
        <div className="prices">
          <h5>$ {regular_price}</h5>
          <h5>$ {sale_price}</h5>
        </div>
        </div>
    </Link>
  );
 
};

export default ProductCard;
