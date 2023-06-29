import {Card} from 'react-bootstrap'
import img3 from '../images/3.jpg'

function GradientCard(props) {
    return (
        <a href={`/details/${props.id}`}>
            <Card style={{width:'fit-content'}}>
                <Card.Img src={props.img} style={{aspectRatio:16/10, width:'100%'}} />
            </Card>
        </a>
    );
}

export default GradientCard;