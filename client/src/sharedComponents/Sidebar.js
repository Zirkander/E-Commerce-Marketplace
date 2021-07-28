// import { Link } from '@reach/router';
import { Nav, Navbar, ButtonGroup, Dropdown, Button } from 'react-bootstrap';



function SideBar() {
    return (
        <Navbar sticky='left' align="right">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/shirts">Shirts</Nav.Link>
                <Nav.Link href="/sweaters">Sweaters</Nav.Link>
                <Nav.Link href="/knits">Knits</Nav.Link>
                <Dropdown as={ButtonGroup}>
                    <Button variant='none'><Nav.Link href="/bottoms">Bottoms</Nav.Link></Button>
                    <Dropdown.Toggle split variant='none' drop='end' id='dropdown-split' />
                    <Dropdown.Menu>
                        <Nav.Link href="/bottoms">Shorts</Nav.Link>
                        <Nav.Link href="/bottoms">Pants</Nav.Link>
                        <Nav.Link href="/bottoms">Sweats</Nav.Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="/suits">Suits</Nav.Link>
                <Nav.Link href="/lounge">Lounge</Nav.Link>
                <Nav.Link href="/denim">Denim</Nav.Link>
                <Nav.Link href="/outerwear">Outerwear</Nav.Link>
                <Nav.Link href="/footwear">Footwear</Nav.Link>
                <Nav.Link href="/accessories">Accessories</Nav.Link>
            </Nav>
        </Navbar>

    );
}

export default SideBar;