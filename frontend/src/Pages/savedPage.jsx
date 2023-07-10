import { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import axios from "axios";
import Url from "../component/url";
import CardTemp from "../component/cardTemp";


function SavePage() {

    const [saveds, Setsaveds] = useState([])
    const [posts, Setposts] = useState([])
    
    



    useEffect(() =>{
        let uid = localStorage.getItem('userid')

        const getreq = async () => await axios.get(`${Url}saved/${uid}`).then((res) =>{
            Setsaveds(res.data)
        })

       

        getreq()
    },[])

    useEffect(() =>{
        const getItmes = async () =>{
            for (let items = 0; items < saveds.length; items++) {
                axios.get(`${Url}posts/${saveds[items].itemId}`).then((res) =>{
                    Setposts([res.data])
                })
            }
            
        }

        getItmes()
    },[])

    return (
        <>
        <Sidebar saved={true} />
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
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

            <h1>Coming Soon</h1>
        </div>
        </>
    );
}

export default SavePage;