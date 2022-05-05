import React,{ useState } from 'react';
import 
{ Toolbar, 
  AppBar, 
  Typography, 
  Box, 
  Button, 
  Tabs , 
  Tab , 
  Link

} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';



const Header = () => {
    const dispath =  useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [value, setValue] = useState();
  return (
    //<div>Header</div>

    <AppBar
        position="sticky"
        sx={ {
            
            background: "linear-gradient(90deg, rgba(24,175,158,1) 0%, rgba(51,244,218,1) 35%, rgba(0,212,255,1) 100%)",
            
        }}
    
    >
        <Toolbar>
            <Typography variant = "h4">BlogsApp</Typography>
            { isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                <Tabs
                    textColor="Inherit" 
                    value={value} 
                    onChange = {(e, val) => setValue(val)}
                
                >
                    <Tab LinkComponent={NavLink} to="/blogs" label="ALL BLOGS" />
                    <Tab LinkComponent={NavLink} to="/myBlogs" label="MY BLOGS" />
                    <Tab LinkComponent={NavLink} to="/blogs/add" label="ADD BlOG" />

                </Tabs>

                
            </Box>}
            <Box display = "flex" marginLeft="auto">
                { !isLoggedIn && (
                    <div> 
                        {" "}
                        <Button 
                         LinkComponent={NavLink} to="/auth"
                         variant = "contained" 
                         sx = {{ margin: "1", borderRadius: 10, marginRight:'10px'}} 
                         color="warning"        
                        >       
                         LOGIN
                        </Button>

                        <Button
                         LinkComponent={NavLink} to="/auth" 
                         variant = 'contained' 
                         sx = {{margin: "1", borderRadius: 10, marginRight : '10px'}}
                         color="warning"
                        >
                            SIGN UP
                        </Button> 
                    </div>
                )}

                {isLoggedIn && (
                    <Button 
                        onClick={() => dispath(authActions.logout()) }
                        LinkComponent={NavLink} to="/auth"
                        variant = 'contained' 
                        sx = {{margin: "1", borderRadius: 10}}
                        color="warning"
                    >
                        LOGOUT
                    </Button>
                )}
            </Box>



        </Toolbar>
    </AppBar>
  );
};

export default Header