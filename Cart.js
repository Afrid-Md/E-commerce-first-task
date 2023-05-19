import { Modal, Button } from "react-bootstrap";
import "./Cart.css";
import React, { useContext} from "react";
import cartContext from "../Store/cart-context";

function Cart(props) {

  const cartCtx=useContext(cartContext);

  let total=0;
  cartCtx.items.map((item)=>{
    return total=total+item.price*item.quantity;
  })

  const purchaseHandler=()=>{
    alert('Thanks for the purchase')
    cartCtx.purchase();
  }

  const removeHandler=(id)=>{
    cartCtx.removeItem(id)
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "center" }}
    >
      <Modal.Dialog>
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
            {cartCtx.items.map((item) => (
              <div className="items" key={item.id}>
                <div style={{textAlign:'center'}}>
                  <img
                    src={item.imageSrc}
                    alt={item.Album}
                    style={{ width: "100px", marginTop: "10px" }}
                  ></img>
                  <br></br>
                  <span>
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
                    style={{ width: "25px", height: "30px" }}
                    defaultValue={item.quantity}
                  ></input>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                    onClick={function(){removeHandler(item.id)}}
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
