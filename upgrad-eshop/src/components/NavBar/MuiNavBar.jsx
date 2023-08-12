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
  styled,
  alpha,
  Box,
  InputBase,
} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export const MuiNavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        justifyContent: "center",
        backgroundColor: "#3f51b5",
      }}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack></Stack>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          href="/home"
        >
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          upGrad E-Shop
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction={"row"}>
          <StyledEngineProvider injectFirst>
            <Button
              className="muiButton"
              variant="text"
              color="inherit"
              href="/login"
            >
              Login
            </Button>
            <Button
              className="muiButton"
              variant="text"
              color="inherit"
              href="/signup"
            >
              Sign Up
            </Button>
          </StyledEngineProvider>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
