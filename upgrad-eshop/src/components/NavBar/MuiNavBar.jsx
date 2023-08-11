import "./MuiNavBar.css";
import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  StyledEngineProvider,
  TextField,
  InputAdornment,
} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export const MuiNavBar = () => {
  return (
    <AppBar position="static" sx={{ alignContent: "center" }}>
      <Toolbar sx={{ alignContent: "center" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          upGrad E-Shop
        </Typography>
        <TextField
          sx={{ flexGrow: 2 }}
          placeholder="Search..."
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Stack direction={"row"}>
          <StyledEngineProvider injectFirst>
            <Button className="muiButton" variant="text" color="inherit">
              Login
            </Button>
            <Button className="muiButton" variant="text" color="inherit">
              Sign Up
            </Button>
          </StyledEngineProvider>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
