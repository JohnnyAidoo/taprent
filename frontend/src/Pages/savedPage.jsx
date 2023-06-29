import Sidebar from "../component/sidebar";

function SavePage() {
    return (
        <>
        <Sidebar saved={true} />
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            <h1>commig soon </h1>
        </div>
        </>
    );
}

export default SavePage;