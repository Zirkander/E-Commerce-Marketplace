import { Navbar,Container,Nav,NavDropdown, NavItem } from 'react-bootstrap';
import logo from '../imgs/logoSeattle.png'

function ShopNavbar() {
  return (
    <Navbar fixed="top"  bg="light" expand="lg" >
  <Container>
  <Navbar.Brand href="/home">
      <img
        src={logo}
        width="650rem"
        height="70px"
        className="d-inline-block align-top"
        alt="Seattle Thread Company logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Shop" id="basic-nav-dropdown"> 
          <NavDropdown id=" dropdown-item-button dropdown-button-drop-end" title="New Arrivals">
            <NavItem>1</NavItem>
            <NavItem>2</NavItem>
            <NavItem>3</NavItem>
            <NavItem>4</NavItem>
          </NavDropdown>
          <NavDropdown title="Clothing">Clothing</NavDropdown>
          <NavDropdown title="About">About</NavDropdown>
          <NavDropdown title="Blog">Blog</NavDropdown>
          {/* <NavDropdown.Divider /> */}
        </NavDropdown>
          {/* <NavDropdown.Divider /> */}
        <Nav.Link href="#link">Brands</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/blogs">Blog</Nav.Link>
        <Nav.Link href="/view/cart">Cart</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
 
</Navbar>

  );
}

export default ShopNavbar;