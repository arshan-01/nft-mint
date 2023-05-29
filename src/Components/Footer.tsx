import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 2,
        mt: "auto",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
         background: 'linear-gradient(to right,#112823, #112B26)' 
      }}
    >
      <Typography variant="body2" align="center" color="white">
        © {new Date().getFullYear()} Your Website Name. All rights reserved.
      </Typography>
    </Box>
  );
}; 

export default Footer;
