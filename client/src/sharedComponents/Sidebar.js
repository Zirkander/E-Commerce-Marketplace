import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'


function SideBar() {
    return (
        <Navbar fixed='left'>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/shirts">Shirts</Nav.Link>
                <Nav.Link href="/knits">Knits</Nav.Link>
                <Nav.Link href="/bottoms">Bottoms</Nav.Link>
                <Nav.Link href="/denim">Denim</Nav.Link>
                <Nav.Link href="/outerwear">Outerwear</Nav.Link>
                <Nav.Link href="/footwear">Footwear</Nav.Link>
                <Nav.Link href="/accessories">Accessories</Nav.Link>
            </Nav>
        </Navbar>

    );
}

export default SideBar;