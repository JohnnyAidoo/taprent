// import gif from '../images/logo.gif'
import { Skeleton, Stack } from "@mui/material";

function Loading() {
  return (
    <>
      {/* <div style={{position:'fixed',width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center',backgroundClip:'white', top:0 , }}>
            <img style={{width:'100%'}} src={gif} alt="" />
        </div> */}
      <Stack>
        <Skeleton variant="rectangular" width={300} height={200} />
        <Skeleton variant="text" width={300} height={50} />
        <Skeleton variant="text" width={100} height={50} />
      </Stack>
    </>
  );
}

export default Loading;
