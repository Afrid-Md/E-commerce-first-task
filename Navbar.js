import { Container, Navbar,Nav,Button, Badge} from 'react-bootstrap';
import CartContext from '../Store/cart-context';
import { useContext } from 'react';

function NavBar(props){

  const cartCtx=useContext(CartContext);

  let totalItemsInCart=cartCtx.items.length;
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
            <Nav className="me-auto display-6">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href='#About'>About</Nav.Link>
            </Nav>
            <Button variant='primary' className='text-center'onClick={props.onOpen}>
              Your Cart
              <Badge bg='secondary' style={{marginLeft:'5px'}}>{totalItemsInCart}</Badge>
            </Button>
        </Container>
      </Navbar>
    )
}
export default NavBar;