import { Container, Navbar,Nav,Button, Badge} from 'react-bootstrap';


function NavBar(props){
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
            <Nav className="me-auto display-6">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href='#About'>About</Nav.Link>
            </Nav>
            <Button variant='primary' className='text-center' onClick={props.onOpen}>
              Your Cart
            </Button>
            <Badge bg='transparent'>100</Badge>
        </Container>
      </Navbar>
    )
}
export default NavBar;