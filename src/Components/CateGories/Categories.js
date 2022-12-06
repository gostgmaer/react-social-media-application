import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="Categories">
      <div className="col">
        <div className="row">
          <img
            src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
            alt=""
          />
          <button> <Link className="link" to={`products/1`}>Sale</Link> </button>
        </div>{" "}
        <div className="row"> <img
            src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
            alt=""
          />
          <button> <Link className="link" to={`products/2`}>MAN</Link> </button></div>
      </div>
      <div className="col">
        <div className="row"> <img
            src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
            alt=""
          />
          <button> <Link className="link" to={`products/3`}>women</Link> </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row"> <img
            src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
            alt=""
          />
          <button> <Link className="link" to={`products/4`}>New Session</Link> </button></div>
          </div>
          <div className="col">
            <div className="row"> <img
            src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
            alt=""
          />
          <button> <Link className="link" to={`products/5`}>Shoes</Link> </button></div>
          </div>
        </div>
        <div className="row"> <img
            src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
            alt=""
          />
          <button> <Link className="link" to={`products/6`}>Accessories</Link> </button></div>
      </div>
    </div>
  );
};

export default Categories;
