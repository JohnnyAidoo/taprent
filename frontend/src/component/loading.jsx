import gif from '../images/logo.gif'

function Loading() {
    return (
        <>
        <div style={{position:'fixed',width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center',backgroundClip:'white'}}>
            <img style={{width:'100%'}} src={gif} alt="" />
        </div>
        </>
    );
}

export default Loading;