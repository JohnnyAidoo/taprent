function Sidebar() {
    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'

    const toExplore = () =>{
        window.location.pathname = '/explore'
    }


    return (
        <>
        <div id='sidebar' style={{position:'fixed', left:0,top:0, background:primary, width:'20vw', height:'100vh'}} >
        <ul style={{display:'flex', flexDirection:'column',alignItems:'start', justifyContent:'space-around',height:'100%'}}>
            <h1 >TapRent</h1>
           <li className="active"> 
            <a className="btn " href="/"><i className="fas fa-home"></i> HOME</a>
            </li>
           <li onClick={toExplore}> 
            <a className="btn " href="/explore"><i className="fa fa-compass" aria-hidden="true"></i> EXPLORE</a>
            </li>
           <li> 
            <a className="btn " href="#"><i className="fas fa-message"></i> MESSAGES</a>
            </li>
           <li> 
            <a className="btn " href="#"><i className="fas fa-user"></i> PROFILE</a>
            </li>
        </ul>
        </div>
        </>
    );
}

export default Sidebar;