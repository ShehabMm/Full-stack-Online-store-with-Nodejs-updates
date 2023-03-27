import React from "react";
import { useGetOneProductQuery } from "Redux/productsApi";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import NotFound from "pages/NotFound";

const Productdetails = () => {
  let { id } = useParams();

  const { data, error, isLoading } = useGetOneProductQuery(id);

  if (error) {
    return <NotFound />;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (data) {
    return (
      <div className="card-products">
        <div className="left">
          <img src={data.imageLink[2]} alt="shoe" />
          <i className="fa fa-long-arrow-left"></i>
          <i className="fa fa-long-arrow-right"></i>
        </div>
        <div className="right">
          <div className="product-info">
            <div className="product-name">
              <h1>{data.description}</h1>
              <i className="fa fa-search"></i>
              <i className="fa fa-user"></i>
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="details">
              <h3>Summer Collection</h3>
              <h2>{data.productName}</h2>
              <h4>
                <span className="fa fa-dollar"></span>${data.price}
              </h4>
              <h4 className="dis">
                <span className="fa fa-dollar"></span>500
              </h4>
            </div>
            <ul>
              <li>SIZE</li>
              <li className="bg">7</li>
              <li className="bg">8</li>
              <li className="bg">9</li>
              <li className="bg">10</li>
              <li className="bg">11</li>
            </ul>
            <ul>
              <li>COLOR</li>
              <li className="yellow"></li>
              <li className="black"></li>
              <li className="blue"></li>
            </ul>
            <span className="foot">
              <i className="fa fa-shopping-bag"></i>Buy Now
            </span>
            <span className="foot">
              <i className="fa fa-shopping-cart"></i>Add TO Cart
            </span>
          </div>
        </div>

        {/* //swiper react >>>>>>>>>>>>>> */}
      </div>
    );
  }
};

export default Productdetails;
