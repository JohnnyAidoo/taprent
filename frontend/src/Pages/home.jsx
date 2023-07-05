import { useEffect, useState } from "react";
import CardTemp from "../component/cardTemp";
import axios from 'axios'
import Sidebar from "../component/sidebar";
import Url from "../component/url";

function Home() {

    const [posts , setposts] = useState([]);

    useEffect( ()=>{
        axios.get(`${Url}posts`).then((res) =>{
            setposts(res.data);
        })

    })

    return (
        <>
       <Sidebar home={true}/>
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>

            <div id="grid">
                { posts.map((post) =>(
                    <CardTemp
                    key={post._id}
                    id={post._id}
                    photos={post.photos} 
                    title={post.title}
                    location={post.location}
                    tel ={post.telephone}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

export default Home;