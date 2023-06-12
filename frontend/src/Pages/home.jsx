import { useEffect, useState } from "react";
import CardTemp from "../component/cardTemp";
import axios from 'axios'
import Sidebar from "../component/sidebar";

function Home() {

    const [posts , setposts] = useState([]);

    useEffect( ()=>{
        axios.get('http://localhost:8000/posts').then((res) =>{
            setposts(res.data);
        })

    },[])

    return (
        <>
       <Sidebar home={true}/>
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>

            <div id="grid">
                { posts.map((post) =>(
                    <CardTemp
                    key={post.title}
                    title={post.title}
                    location={post.location}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

export default Home;