import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import logo from '../imgs/logoSeattle.png'

function ShopNavbar() {
  return (
    <Navbar fixed="top"  bg="light" expand="lg" >
  <Container>
  <Navbar.Brand href="#home">
      <img
        src={logo}
        width="765rem"
        height="80px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Nav.Link href="#home">Shop</Nav.Link>
        <NavDropdown title="Clothing" id="basic-nav-dropdown"> 
          
          <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Sweaters</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Knits</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Suits & Accessories</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Outerwear</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Denim</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lounge</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
        </NavDropdown>
        <NavDropdown title="Accessories" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Footwear</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Socks</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Sunglasses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Hats</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Watches & Jewelry</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Wallets & Clips</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bags & Briefcases</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Winter Accessories</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Belts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Grooming & Cologne</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
        </NavDropdown>
        <Nav.Link href="#link">Sale</Nav.Link>
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">Account</Nav.Link>
        <Nav.Link href="#link">Gift Card</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default ShopNavbar;