import React from "react";
import { Container, Row, Col,Button,Card} from "react-bootstrap";
import Image1 from "../../Images/Album-1.png";
import Image2 from "../../Images/Album-2.png";
import Image3 from "../../Images/Album-3.png";
import Image4 from "../../Images/Album-4.png";
import './Products-1.css'

function Products_1() {
  return (
    <React.Fragment>
      <h1 className="text-center font-monospace">MUSIC</h1>
      <Container className="mt-5">
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
          <h3 className="font-monospace mt-3">Album 1</h3>
            <Card className="shadow lg">
            <img src={Image1} alt='colors'/>
            <div className="divs">
            <span className="text">RS.100</span>
            <Button className="m-4">Add to cart</Button>
            </div>
            </Card>  
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
          <h3 className="font-monospace mt-3">Album 2</h3>
            <Card className="shadow lg">
            <img src={Image2} alt='black_and_white_colors'/>
            <div className="divs">
            <span className="text">RS.50</span>
            <Button className="m-4">Add to cart</Button>
            </div>
            </Card>  
          </Col>
          
        </Row>
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
        <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Album 3</h3>
            <Card className="shadow lg">
            <img src={Image3} alt='black_color'/>
            <div className="divs">
            <span className="text">RS.70</span>
            <Button className="m-4">Add to cart</Button>
            </div>
            </Card>  
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Album 4</h3>
            <Card className="shadow lg">
            <img src={Image4} alt='blue_color'/>
            <div className="divs">
            <span className="text">RS.100</span>
            <Button className="m-4">Add to cart</Button>
            </div>
            </Card>  
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Products_1;
