import { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import axios from "axios";
import Url from "../component/url";
import CardTemp from "../component/cardTemp";



function SavePage() {
    const [posts, Setposts] = useState([])
    

    useEffect(() =>{

        const uid = localStorage.getItem('userid');

        const fetchSaved = async () =>{
                try{
                const response = await axios.get(`${Url}saved/${uid}`)
                const data = (response.data)
    
                const fullPosts = await Promise.all(
                    data.map(async (item) => {
                        const postResponse = await axios.get(`${Url}posts/${item.itemId}`)
                        return postResponse.data
                    })
                );
    
                Setposts(fullPosts)
            } catch (error){
                console.error('Error fetching posts:' , error)
            }
            }

        fetchSaved()
    })

    return (
        <>
        <Sidebar saved={true} />
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            
            <div id='grid'>
                {posts.map((post) =>(
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

export default SavePage;