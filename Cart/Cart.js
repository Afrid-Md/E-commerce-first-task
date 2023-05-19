import { Modal, Button } from "react-bootstrap";
import "./Cart.css";
import Image1 from "../../Images/Album-1.png";
import Image2 from "../../Images/Album-2.png";
import Image3 from "../../Images/Album-3.png";
import Image4 from "../../Images/Album-4.png";
import React, { useContext } from "react";
import cartContext from "../Store/cart-context";
const cartElements = [

  {
  Album:'Album 1',
  title: 'Colors',
  price: 100,
  imageSrc:Image1,
  quantity: 2,
  },
  {
  Album:'Album 2',
  title: 'Black and white Colors',
  price: 50,
  imageSrc: Image2,
  quantity: 5, 
  },
  {
    Album:'Album 3',
  title: 'Yellow and Black Colors',
  price: 70,
  imageSrc: Image3,
  quantity: 1,
  }
  ]
function Cart(props) {

  let total=0;
  cartElements.map((item)=>{
    total=total+item.price*item.quantity;
  })

  const purchaseHandler=()=>{
    alert('Thanks for the purchase')
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "center" }}
    >
      <Modal.Dialog size="large">
        <Modal.Header
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Modal.Title style={{ fontFamily: "fantasy", fontSize: "35px" }}>
            YOUR CART
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="body">
          <div className="heading">
            <span style={{ marginLeft: "48px" }}>ITEM</span>
            <span style={{ marginLeft: "80px" }}>PRICE</span>
            <span style={{ marginLeft: "50px" }}>QUANTITY</span>
          </div>
          <hr></hr>
          <div>
            {cartElements.map((item) => (
              <div className="items">
                <div>
                  <img
                    src={item.imageSrc}
                    style={{ width: "100px", marginTop: "10px" }}
                  ></img>
                  <br></br>
                  <span
                    style={{ marginLeft: "25px", justifyContent: "center" }}
                  >
                    {item.Album}
                  </span>
                </div>
                <div style={{ fontSize: "20px" }}>RS.{item.price}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    justifyItems: "center",
                  }}
                >
                  <input
                    style={{ width: "30px", height: "30px" }}
                    defaultValue={item.quantity}
                  ></input>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="amount">
            <span>
              <h2>Total Amount</h2>
            </span>
            <span>
              <h2>RS. {total}</h2>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onclose}>
            Close
          </Button>
          <Button variant="primary" onClick={purchaseHandler}>Purchase</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
export default Cart;
