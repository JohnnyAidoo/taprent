import { useState , useEffect, memo} from "react"
import { Nav } from "react-bootstrap"
import {Link} from 'react-router-dom'

const Sidebar = memo( function SidebarComp(props) {
    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'

     

    return (
        <>
        <div id='sidebar' style={{position:'fixed', left:0,top:0, background:primary, width:'20vw', height:'100vh'}} >
            <ul>
                <h1>Tap Rent</h1>
            <Nav  id='nav' variant="tabs" >
                <Nav.Item >
                <Nav.Link className="text-dark"  href="/"  style={{padding:'12%'}}><i className="fa fa-home"></i> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  className="text-dark"  href="/explore" style={{padding:'12%'}}> <i className="fa fa-compass"></i> Explore</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="text-dark"  href="/mysaved" style={{padding:'12%'}}> <i className="fa fa-heart"></i> Saved</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="text-dark"  href="/profile" style={{padding:'12%'}}> <i className="fa fa-user"></i> Profile</Nav.Link>
                </Nav.Item>
            </Nav>
            </ul>
        </div>
        </>
    );
});

export default Sidebar;