import coffeecup from "../../Images/coffeeCup.png";
import tShirt from "../../Images/t-shirt.png";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import React, { useContext } from "react";
import "./Products-2.css";
import CartContext from "../Store/cart-context";

function Products_2() {

  const cartCtx=useContext(CartContext);

  const item5Handler=()=>{
    const item5={
      id:'t-shirt',
      Album:'T-Shirt',
      price:300,
      quantity:1,
      imageSrc:tShirt
    }
    cartCtx.addItem(item5);
  }

  const item6Handler=()=>{
    const item6={
      id:'coffeeCup',
      Album:'Coffee Cup',
      price:200,
      quantity:1,
      imageSrc:coffeecup
    }
    cartCtx.addItem(item6);
  }
  return (
    <React.Fragment>
      <h1 className="text-center font-monospace">MERCH</h1>
      <Container className="mt-5">
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">T-Shirt</h3>
            <Card className="shadow lg">
              <img src={tShirt} alt="t-shirt" />
              <div className="divs">
                <span className="text">RS.300</span>
                <Button className="m-4" onClick={item5Handler}>Add to cart</Button>
              </div>
            </Card>
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Coffee Cup</h3>
            <Card className="shadow lg">
              <img src={coffeecup} alt="coffeeCup" />
              <div className="divs">
                <span className="text">RS.200</span>
                <Button className="m-4" onClick={item6Handler}>Add to cart</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Products_2;
