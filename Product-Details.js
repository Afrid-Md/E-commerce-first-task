import React from "react";
import NavBar from "../../Home/navBarAndGenerics/NavBar";
import { useParams } from "react-router-dom";
import "./Product-Details.css";
import Rating from "../Images/rating.png";

function ProductDetails(props) {
  const params = useParams();
  const item = props.items.find((item) => item.id === params.productId);
  console.log(item.id);
  return (
    <React.Fragment>
      <NavBar />
      <div className="productDetails">
        <h1>Product details</h1>
      </div>

      <div className="main">
        <div className="image">
          <img src={item.imageSrc} alt={item.id} className="imageclass"></img>
        </div>

        <div className="pricing">
          <h2>{item.id}</h2>
          <h3>RS.{item.price}</h3>
          <div className="rating">
            <div className="lg">
              <span>{item.star}</span>
              <span>
                <img src={Rating} alt="rating"></img>
              </span>
            </div>
            <div style={{ marginLeft: "5px" }}>
              {item.rating} ratings and {item.review} reviews
            </div>
          </div>
          <h1 className="review">Ratings & Reviews</h1>
          <div>
            <ul>
              <li style={{marginTop:'20px'}}>
                <span>love item</span>
                <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
                  John
                </span>
              </li>
              <li style={{marginTop:'20px'}}>
                <span>good item</span>
                <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
                Arden
                </span>
              </li>
              <li style={{marginTop:'20px'}}>
                <span>nice quality</span>
                <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
                Lilac
                </span>
              </li>
              <li style={{marginTop:'20px'}}>
                <span>very good product</span>
                <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
                Birdie
                </span>
              </li>
              <li style={{marginTop:'20px'}}>
                <span>super item</span>
                <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
                Blythe
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ProductDetails;
