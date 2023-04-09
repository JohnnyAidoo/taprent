import { useEffect } from "react";
import Sidebar from "./sidbar";
import { Button } from 'react-bootstrap'

function Header() {

    const primary = '#FBF5F3'
    const secondary = '#FBF5F3'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'

    return (
        <>
            <header style={{backgroundColor: primary, borderBottom: 'solid .5px grey'}} className=" d-flex p-4 justify-content-between">
                <b>Tap rent</b>
                <div id="searchBar">
                <input placeholder="search" type="text"/><button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <div className="d-flex">
                    <Button style={{height :'100%'}} variant="ouline" href='/'><i className="fa fa-upload"></i></Button>
                    <Button id='profilebtn' style={{height :'100%'}} variant='outline' href='/profile' ><i className="fa fa-user"></i></Button>
                </div>
            </header>
        </>
    );
}

export default Header;