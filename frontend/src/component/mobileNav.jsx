import { Nav } from "react-bootstrap";
import {BottomNavigation, BottomNavigationAction, Paper, ThemeProvider, createMuiTheme, createTheme, } from '@mui/material'
import { useState } from "react";


function MobileNav(props) {
    const [value, setValue] = useState(0);
    return (
        <>
         {/* <Nav  id='mobileNav' variant="tabs" >
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link className="text-dark"  href="/"  style={{padding:'12%'}}><i className="fa fa-home"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link className="text-dark"  href="/mysaved" style={{padding:'12%'}}> <i className="fa fa-heart"></i></Nav.Link>
                </Nav.Item>
                <Nav.Item className='d-flex justify-content-center align-itemss-center'>
                <Nav.Link className="text-dark"  href="/profile" style={{padding:'12%'}}> <i className="fa fa-user"></i></Nav.Link>
                </Nav.Item>
            </Nav> */}


            <ThemeProvider 
            theme={createTheme({
                palette:{
                    primary:{
                        main : '#FD5200'
                    }
                }
            })}
            >
            <Paper id='mobileNav'
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , width:'100%'}} elevation={3}
            >
            <BottomNavigation
            showLabels
            value={props.value}
            onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{color:'orange', }}
            >
                <BottomNavigationAction label='Home' icon={<i className="fa fa-home"></i>} href="/" />
                <BottomNavigationAction label='Saved' icon={<i className="fa fa-heart"></i>} href="/mysaved" />
                <BottomNavigationAction label='Profile' icon={<i className="fa fa-user"></i>} href="/profile" />
            </BottomNavigation>
            </Paper>
            </ThemeProvider>
            
        </>
    );
}

export default MobileNav;