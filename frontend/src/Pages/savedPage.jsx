import { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import axios from "axios";
import Url from "../component/url";
import { useParams } from "react-router-dom";

function SavePage() {

    const [saveds, Setsaveds] = useState()

    const params = useParams()
    const uid = params.uid

    useEffect(() =>{

         axios.get(`${Url}saved`,{
            uid : uid
         }).then((res) =>{
            // Setsaveds(res.data)
            console.log(res)
        })
    })

    return (
        <>
        <Sidebar saved={true} />
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            
        </div>
        </>
    );
}

export default SavePage;