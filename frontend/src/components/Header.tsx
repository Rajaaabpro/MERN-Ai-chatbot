import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import NavigationLink from "./shared/NavigationLink";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/Chat"
                text="Go To Chat"
                textcolor="black"
              />
              <NavigationLink
                bg="#51538f"
                textcolor="white"
                to="/"
                text="logout"
                onclick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textcolor="black"
              />
              <NavigationLink
                bg="#51538f"
                textcolor="white"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
