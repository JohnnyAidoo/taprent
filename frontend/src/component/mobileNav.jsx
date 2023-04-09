import { Nav } from "react-bootstrap";

function MobileNav() {
    return (
        <>
         <Nav  id='mobileNav' variant="tabs" >
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link className="text-dark"  href="/"  style={{padding:'12%'}}><i className="fa fa-home"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link  className="text-dark"  href="/explore" style={{padding:'12%'}}> <i className="fa fa-compass"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link className="text-dark"  href="/mysaved" style={{padding:'12%'}}> <i className="fa fa-heart"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link className="text-dark"  href="/profile" style={{padding:'12%'}}> <i className="fa fa-user"></i></Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default MobileNav;