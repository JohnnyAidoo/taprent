import { Tabs } from "@mui/material";
import CardTemp from "../component/cardTemp";
import Header from "../component/header";
import Sidebar from "../component/sidbar";
import SmallCard from "../component/smallCard";

function Home() {
    return (
        <>
       
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            <div id="grid">
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
            </div>
        </div>
        </>
    );
}

export default Home;