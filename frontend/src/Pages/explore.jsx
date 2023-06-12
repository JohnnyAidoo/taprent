import { useEffect } from "react";
import {Button, Form, InputGroup} from 'react-bootstrap'
import GradientCard from "../component/graientCard";
import Sidebar from "../component/sidebar";

function Explore() {


    return (
        <>
        <Sidebar explore={true} />
        <div id='home' style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>

            <form>
                <InputGroup className='p-2'>
                 <Form.Control 
                 palceholder='search'/>
                 <Button><i className="fa fa-search"></i></Button>
                </InputGroup>
            </form>

            <div id="grid">
                <GradientCard />
                <GradientCard />
                <GradientCard />
                <GradientCard />
                <GradientCard />
                <GradientCard />
                <GradientCard />
            </div>
        </div>
        </>
    );
}

export default Explore;