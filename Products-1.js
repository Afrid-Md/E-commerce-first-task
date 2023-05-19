import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image1 from "../../Images/Album-1.png";
import Image2 from "../../Images/Album-2.png";
import Image3 from "../../Images/Album-3.png";
import Image4 from "../../Images/Album-4.png";
import "./Products-1.css";
import cartContext from "../Store/cart-context";

function Products_1() {
  
  const cartCtx=useContext(cartContext);

  const item1Handler=()=>{
    const item1={
      id:'colors',
      Album:'Album 1',
      price:100,
      quantity:1,
      imageSrc:Image1
    }
    cartCtx.addItem(item1);
  }

  const item2Handler=()=>{
    const item2={
      id:'blackAndWhite',
      Album:'Album 2',
      price:50,
      quantity:1,
      imageSrc:Image2
    }
    cartCtx.addItem(item2);
  }

  const item3Handler=()=>{
    const item3={
      id:'blackAndYellow',
      Album:'Album 3',
      price:70,
      quantity:1,
      imageSrc:Image3
    }
    cartCtx.addItem(item3);
  }

  const item4Handler=()=>{
    const item4={
      id:'blue',
      Album:'Album 4',
      price:100,
      quantity:1,
      imageSrc:Image4
    }
    cartCtx.addItem(item4);
  }

 
  return (
    <React.Fragment>
      <h1 className="text-center font-monospace">MUSIC</h1>
      <Container className="mt-5">
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace mt-3">Album 1</h3>
            <Card className="shadow lg">
              <img src={Image1} alt="colors" />
              <div className="divs">
                <span className="text">RS.100</span>
                <Button className="m-4" onClick={item1Handler}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace mt-3">Album 2</h3>
            <Card className="shadow lg">
              <img src={Image2} alt="black_and_white_colors" />
              <div className="divs">
                <span className="text">RS.50</span>
                <Button className="m-4" onClick={item2Handler}>Add to cart</Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Album 3</h3>
            <Card className="shadow lg">
              <img src={Image3} alt="black_color" />
              <div className="divs">
                <span className="text">RS.70</span>
                <Button className="m-4" onClick={item3Handler}>Add to cart</Button>
              </div>
            </Card>
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Album 4</h3>
            <Card className="shadow lg">
              <img src={Image4} alt="blue_color" />
              <div className="divs">
                <span className="text">RS.100</span>
                <Button className="m-4" onClick={item4Handler}>Add to cart</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Products_1;
