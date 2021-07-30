// import { Link } from '@reach/router';
import { Nav, Navbar, ButtonGroup, Dropdown, Button } from "react-bootstrap";

function SideBar() {
  const findProducts = (activeFilters, products) =>
    products.filter((product) =>
      Object.keys(activeFilters).every(
        (key) => product[key] === activeFilters[key]
      )
    );
  return (
    <Navbar
      fixed="left"
      align="right"
      style={{ position: "fixed", marginRight: "300px", marginTop: "100px" }}
    >
      <Nav defaultActiveKey="/home" className="flex-column">
      <Dropdown as={ButtonGroup}>
                    <Button variant='none'><Nav.Link href="/shirts">Shirts</Nav.Link></Button>
                    <Dropdown.Toggle split variant='none' drop='end' id='dropdown-split' />
                    <Dropdown.Menu>
                        <Nav.Link href="/bottoms">Tees</Nav.Link>
                        <Nav.Link href="/bottoms">Knits</Nav.Link>
                        <Nav.Link href="/bottoms">Sweaters</Nav.Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button variant='none'><Nav.Link href="/bottoms">Bottoms</Nav.Link></Button>
                    <Dropdown.Toggle split variant='none' drop='end' id='dropdown-split' />
                    <Dropdown.Menu>
                        <Nav.Link href="/bottoms">Shorts</Nav.Link>
                        <Nav.Link href="/bottoms">Pants</Nav.Link>
                        <Nav.Link href="/bottoms">Sweats</Nav.Link>
                        <Nav.Link href="/bottoms">Denim</Nav.Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button variant='none'><Nav.Link href="/suits">Suits</Nav.Link></Button>
                    <Dropdown.Toggle split variant='none' drop='end' id='dropdown-split' />
                    <Dropdown.Menu>
                        <Nav.Link href="/bottoms">Pants</Nav.Link>
                        <Nav.Link href="/bottoms">Shirts</Nav.Link>
                        <Nav.Link href="/bottoms">Jackets</Nav.Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button variant='none'><Nav.Link href="/lounge">Lounge</Nav.Link></Button>
                    <Dropdown.Toggle split variant='none' drop='end' id='dropdown-split' />
                    <Dropdown.Menu>
                        <Nav.Link href="/bottoms">Bottoms</Nav.Link>
                        <Nav.Link href="/bottoms">Tops</Nav.Link>
                        <Nav.Link href="/bottoms">Sweats</Nav.Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button variant='none'><Nav.Link href="/accessories">Accessories</Nav.Link></Button>
                    <Dropdown.Toggle split variant='none' drop='end' id='dropdown-split' />
                    <Dropdown.Menu>
                        <Nav.Link href="/bottoms">Watches</Nav.Link>
                        <Nav.Link href="/bottoms">Jewelry</Nav.Link>
                        <Nav.Link href="/bottoms">Cufflinks</Nav.Link>
                        <Nav.Link href="/bottoms">Sunglasses</Nav.Link>
                        <Nav.Link href="/bottoms">Grooming & Cologne</Nav.Link>
                        <Nav.Link href="/bottoms">Scarves</Nav.Link>
                        <Nav.Link href="/bottoms">Gloves</Nav.Link>
                        <Nav.Link href="/bottoms">Belts</Nav.Link>
                        <Nav.Link href="/bottoms">Wallets & Clips</Nav.Link>
                        <Nav.Link href="/bottoms">Hats, Caps & Beanies</Nav.Link>
                        <Nav.Link href="/bottoms">Shoes and footwear</Nav.Link>
                    </Dropdown.Menu>
                </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default SideBar;
