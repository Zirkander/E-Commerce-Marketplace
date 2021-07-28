import { navigate } from '@reach/router';

function footer() {
    return (
        <div>
            <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link>
        </Nav>
        </div>

    );
}

export default sideBar;