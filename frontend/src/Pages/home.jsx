import CardTemp from "../component/cardTemp";

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