//Login.js
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Avatar, TextField, Checkbox, Button, Typography, Link } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { borderColor, borderRadius, width } from "@mui/system";



const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "70vh",
        width: 420,
        margin: "20px auto",
        borderRadius : 20
    }
    
    const btnstyle={
        margin:"10px 0",
        borderRadius: 25,
        height: '45px',
        width : "400px",
        borderWidth: 5, 
        borderColor: 'red' 
    }

    const btnstyle2={
        color: 'blue',
        margin:"10px 0",
        height: '45px',
        width : "400px",
        backgroundColor: "white",    
        borderRadius: 25,
        borderWidth: 2, 
        borderColor: 'blue'
    }
    const textfield={
        margin:"15px 0",
    }
    

    return(
         <Grid> 
            <Paper elevation={10} style={paperStyle}>
                
                <Grid align="right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/240px-Grey_close_x.svg.png" 
                alt="X" height={20} width={20}/>
                </Grid>
                <Grid align="center">
                <img src="https://thefriscobowl.com/wp-content/uploads/2021/08/ESPN-logo.png" 
                alt="Logo" height={60} width={100}/>
                 </Grid>
            
        <TextField 
            variant = "outlined"
            label="Username or Email Address" 
            placeholder="Enter Username" 
            fullWidth required
            style={textfield}
            >
            
        </TextField>
        
        <TextField 
        label="Password (case sensitive)" 
        placeholder="Enter Password" 
        type="password" 
        fullWidth required>
        </TextField>
        
            <Button 
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                
                >
                    Log in
            </Button>

            <Typography style={textfield}>
                    <Link href="#">
                        Need help logging in?
                    </Link>
            </Typography>
                
            <Typography style={textfield}>
                    <p style={{ color: "grey" }}>Facebook Log In is no longer available. 
                    For help logging in, please use the link above.</p>
            </Typography>

            <Button 
               
                variant="outlined"
                style={btnstyle2}
                
                >
                    Sign up
            </Button>

        </Paper>
        </Grid>
    )
}

export default Login;