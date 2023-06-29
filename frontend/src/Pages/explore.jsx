import { useEffect, useState } from "react";
import GradientCard from "../component/graientCard";
import Sidebar from "../component/sidebar";
import axios from "axios";
import Url from "../component/url";

function Explore() {

    const [posts, setposts] = useState([])

    useEffect(() =>{
        axios.get(`${Url}posts`).then((res) => {
            setposts(res.data)
        })
    })

    return (
        <>
        <Sidebar explore={true} />
        <div id='home' style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>

            {/* <form>
                <InputGroup className='p-2'>
                 <Form.Control 
                 palceholder='search'/>
                 <Button><i className="fa fa-search"></i></Button>
                </InputGroup>
            </form> */}

            <div id="grid">
                {posts.map((post) =>(
                    <GradientCard 
                        key={post._id}
                        id={post._id}
                        img={post.photos[0]}
                    />
                    
                ))}
                {posts.map((post) =>(
                    <GradientCard 
                        key={post._id}
                        id={post._id}
                        img={post.photos[1]}
                    />
                    
                ))}
            </div>
        </div>
        </>
    );
}

export default Explore;