import React from "react";
import { Typography, Button, Box, Grid } from "@mui/material";
import Image from "next/image";

const MainPage: React.FC = () => {
  return (
    <Box
      className="main-page"
      textAlign="center"
      sx={{
        bgcolor: "linear-gradient(#ffffff, #d3d3d3, #ffffff)",
        py: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} color="white">
          <Box textAlign="left" px={4}>
            <Typography variant="h2" mb={2}>
              <strong>
                NFT
                <br />
                MINT PAGE
              </strong>
            </Typography>
            <Typography variant="h4" mb={2}>
              BlockChain
            </Typography>
            <Typography variant="body1" mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur alias aliquam aliquid maiores praesentium delectus
              aspernatur incidunt. Nam quidem saepe voluptates ut corrupti
              ducimus, autem illum libero laudantium, repellat ratione?
            </Typography>
            <Box display="flex" justifyContent="center" mb={2}>
              <Button
                variant="contained"
                href="#"
                sx={{
                  width: 200,
                  background: "#112a25",
                  color: "white",
                  "&:hover": {
                    background: "#f5f5f5",
                    color: "black"
                  },
                  "&:focus": {
                    outline: "2px solid #9376E0",
                  },
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Hire me
              </Button>
              <Box ml={2} />
              <Button
                variant="contained"
                href="#"
                sx={{
                  width: 200,
                  background: "#112a25",
                  color: "white",
                  "&:hover": {
                    background: "#f5f5f5",
                    color: "black"
                  },
                  "&:focus": {
                    outline: "2px solid #9376E0",
                  },
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Get CV
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <img
              src="https://rent.cardinal.so/logos/atom-hero.jpg"
              alt="/"
              width="500"
              height="300"
              style={{ borderRadius: "20px", marginTop: "20px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
  