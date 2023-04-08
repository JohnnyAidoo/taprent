import {Card} from 'react-bootstrap'
import img3 from '../images/3.jpg'

function GradientCard() {
    return (
        <Card style={{width:'fit-content'}}>
            <Card.Img src={img3} />
        </Card>
    );
}

export default GradientCard;