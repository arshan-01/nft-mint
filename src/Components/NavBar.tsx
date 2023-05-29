import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import WalletIcon from "@mui/icons-material/Wallet";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";

const theme = createTheme();

const NavBar = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ margin: "20px 40px" }}>
      <AppBar
        position="static"
        className="header"
        sx={{
          background: "rgba(245, 245, 245, 0.2)", // Lighter gray color with opacity
          padding: "8px",
          borderRadius: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img
              src="https://rent.cardinal.so/logos/atom.gif"
              alt="Logo"
              width="24"
              height="24"
              style={{ maxWidth: "100%" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: isSmallScreen ? "1.2rem" : "inherit",
            }}
          ></Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              sx={{
                background: "#eeeee4",
                color: "#112B26",
                "&:hover": {
                  background: "#f5f5f5",
                },
                "&:focus": {
                  outline: "2px solid #9376E0",
                },
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                minWidth: 0, // Allow button to shrink to content width
                whiteSpace: "nowrap", // Prevent line break within button
                fontSize: isSmallScreen ? "0.8rem" : "inherit",
                padding: "4px 8px", // Adjust the padding to make the button smaller
              }}
              startIcon={<WalletIcon />}
            >
              Connect wallet
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
