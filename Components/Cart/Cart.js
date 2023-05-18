import { Modal, Button } from "react-bootstrap";
import "./Cart.css";
import Image1 from "../../Images/Album-1.png";
import Image2 from "../../Images/Album-2.png";
import Image3 from "../../Images/Album-3.png";
import Image4 from "../../Images/Album-4.png";
import React from "react";

function Cart(props) {
  const productsArr = [
    {
      Album: "Album-1",
      title: "Colors",
      price: 100,
      imageSrc: Image1,
    },
    {
      Album: "Album-2",
      title: "Black and white Colors",
      price: 50,
      imageSrc: Image2,
    },

    {
      Album: "Album-3",
      title: "Yellow and Black Colors",
      price: 70,
      imageSrc: Image3,
    },

    {
      Album: "Album-4",
      title: "Blue Color",
      price: 100,
      imageSrc: Image4,
    },
  ];

  // const items=productsArr.map(item=>(
  //   <li style={{marginTop:'10px'}}>
  //     <div>
  //     <img src={item.imageSrc} style={{width:'100px'}}></img>
  //      <span style={{marginLeft:'10px'}}>{item.Album}</span>
  //     </div>
  //     <div>Rs.{item.price}</div>
  //     <div>
  //       <input type="text" style={{maxWidth:'30px'}}></input>
  //       <Button variant="primary" size="xs">Remove</Button>
  //     </div>
  //   </li>
  // ))
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "center"}}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title
            style={{ fontFamily: "fantasy", fontSize: "35px" }}
            className="text-center"
          >
            CART
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="body">
       
          <div className="heading">
            <span style={{marginLeft:'45px'}}>ITEM</span>
            <span style={{marginLeft:'80px'}}>PRICE</span>
            <span style={{marginLeft:'50px'}}>QUANTITY</span>
          </div>
          <hr></hr>
        <div>
          {productsArr.map((item) => (
            <div className="items">
              <div>
                <img
                  src={item.imageSrc}
                  style={{ width: "100px", marginTop: "10px" }}
                ></img>
                <br></br>
                <span style={{ marginLeft: "25px", justifyContent:'center' }}>{item.Album}</span>
              </div>
              <div style={{fontSize:'20px'}}>RS.{item.price}</div>
              <div style={{display:'flex' , justifyContent:'space-around', justifyItems:'center'}}>
                <input style={{width:'30px',height:'30px'}} defaultValue='1'></input>
                <Button variant='danger'size="sm" style={{marginLeft:'10px'}}>Remove</Button>
              </div>
            </div>
          ))}
          
          </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onclose}>
            Close
          </Button>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
export default Cart;
