import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './NavBar.css';
function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Nav className="me-auto display-6">
          <NavLink className='ok' to="/" >Home</NavLink>
          <NavLink className='ok' to="/store">Store</NavLink>
          <NavLink className='ok' to="/aboutpage">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
