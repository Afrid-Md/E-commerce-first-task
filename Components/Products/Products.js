import React from "react";
import Products_1 from "./Products-1";
import Products_2 from "./Products-2";
import { Button } from "react-bootstrap";

function Products() {
  return (
    <div className='text-center'>
      <Products_1 />
      <Products_2 />
      <Button  className="btn btn-secondary btn-lg mb-5">See Cart</Button>
    </div>
  );
}
export default Products;
