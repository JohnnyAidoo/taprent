import img from '../images/1.jpg';
import { Card } from "react-bootstrap";
import {Tab} from '@mui/material';


function SmallCard() {
    return (
        <Tab>
        <Card style={{width:'10vw',marginLeft: '3%'}}>
            <Card.Img src={img}/>
        </Card>
        </Tab>
    );
}

export default SmallCard;