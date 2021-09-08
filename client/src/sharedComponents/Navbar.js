import { Navbar,Container,Nav,NavDropdown, NavItem } from 'react-bootstrap';
import logo from '../imgs/shop.svg'


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
          <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar">
            <Nav>
              <NavDropdown
                id="dropdown-button-drop-end"
                title="Shop"
                drop="down"
              >
                <NavDropdown
                  id="dropdown-button-drop-end"
                  title="Furniture"
                  drop="end"
                  float="left"
                >
                  <div class="d-flex">
                    <div class="m-2">Wood</div>
                    <div class="m-2">Metal</div>
                    <div class="m-2">Other</div>
                  </div>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link href="#home">Brands</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Search | Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    </Navbar>

  );
}

export default ShopNavbar;