import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { imgdata } from "./data";
import "./FeaturedProducts.scss";
import InvokeAPI from "../../APICALL/apicall";

import { Bars } from "react-loader-spinner";

import { Audio } from "react-loader-spinner";
import useFetch from "../../apicall/Hooks/UseFetch";

const FeaturedProducts = ({ type }) => {
  //   console.log(imgdata);

  // const [products, setProducts] = useState([]);
  // const [loading, setloading] = useState(true);

  const { products, loading, error } = useFetch(
    "products",
    "get",
    "",
    {
      populate: "*",
      "[filters][product_type][$eq]": type,
    },
    "",
    ""
  );

  // useEffect(() => {

  //   apicall()
  //   console.log(products);
  // }, []);

  // const apicall = async ()=>{
  //   let query = {
  //     populate:'*',
  //     '[filters][product_type][$eq]':type
  //   }
  //     const res = await InvokeAPI('products','get','','',query,'')

  //     setProducts(res.data)
  //     setloading(false)
  //     // console.log(products);
  // }

  // imgdata.forEach((element) => {
  //   element["imagesData"] = element.Images.split(",");
  // });
  // console.log(imgdata);
  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h3>{type} Products</h3>
        <p>
          Et nulla Lorem nisi esse consequat reprehenderit voluptate ut velit
          laborum dolor proident cupidatat. Quis ut aute magna pariatur pariatur
          sunt id consequat. Sint tempor duis laboris enim velit. Sunt occaecat
          occaecat consequat aute sunt deserunt. Ex consectetur fugiat ea fugiat
          mollit mollit nostrud qui. Ut esse magna non duis est nisi est irure
          est labore. Ut aute adipisicing amet ullamco ut occaecat consectetur
          aute enim consequat incididunt adipisicing ad. Qui ex id ipsum officia
          ut labore adipisicing. Excepteur excepteur voluptate nulla tempor id
          culpa Lorem.
        </p>
      </div>

      <div className="bottom">
        {products?.map((data) => {
          // data["Regular price"]="reglar_price";
          // console.log(data);

          return (
            <React.Fragment key={data.id}>
              {loading ? (
                <Bars width="" height="150" />
              ) : (
                <ProductCard id={data.id} {...data.attributes}></ProductCard>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
