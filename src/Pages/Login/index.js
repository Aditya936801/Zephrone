import React from "react";
import { Box } from "@mui/material";
import user from "../../images/user.svg";
import logo from "../../images/logo.png";
import "./index.css";
import { createTheme } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import {
  ThemeProvider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#003FB9",
      },
    },
    breakpoints: {
        values: {
          xs:0,  
          sm: 700,
        
        },
      },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <ThemeProvider theme={theme}>
      <Box
        height="100%"
        boxSizing="border-box"
        minHeight="100vh"
        padding="30px 10px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      
      >
        <div className="login-form-wrapper">
          <div className="image-container">
            <img src={user} alt="" />
          </div>
          <Box
            fontWeight="bold"
            color="#0B3558"
            sx={{ fontSize: { xs: "40px", sm: "48px" } }}
          >
            WELCOME!
          </Box>
          <Box
            color="#0B3558"
            maxWidth="336px"
            width="100%"
            textAlign="center"
            sx={{ fontSize: { xs: "12px", sm: "20px" } }}
          >
            Let's connect to your workspace. Please enter your email to
            continue.
          </Box>

          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    color="primary"
                  >
                    {showPassword ? (
                      <VisibilityIcon color="primary" />
                    ) : (
                      <VisibilityOffIcon color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            color="#003FB9"
            ml="auto"
            fontWeight="600"
            mt="5px"
            sx={{ fontSize: { xs: "12px", sm: "20px" } }}
          >
            Forgot Password?
          </Box>
          <Button variant="contained" sx={{ width: "100%", mt: 2 }}>
            login
          </Button>
        </div>
        <Box
          color={theme.palette.primary.main}
          display="flex"
          justifyContent="space-between"
          sx={{ fontSize: { xs: "12px", sm: "20px" } }}
          fontWeight="600"
        >
          <Box display="flex">
            <Box color="#728391">Powered by</Box>
            <img src={logo} alt="" className="logo" />
          </Box>
          <Box display="flex">
            <Box mr="10px" >Need Help?</Box>
            <Box>Privacy Policy </Box>
            <Box color="#728391"> & </Box>
            <Box> Terms </Box>
            
          </Box>
        </Box>
        
      </Box>
    </ThemeProvider>
  );
};

export default Login;
