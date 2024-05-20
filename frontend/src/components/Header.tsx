import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import NavigationLink from "./shared/NavigationLink";
import { useAuth } from "../context/AuthContext";

function Header() {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <div>
          <Box sx={{ display: "flex", gap: 2 }}>
            {auth?.isLoggedIn ? (
              <>
                <NavigationLink
                  bg="#00fffc"
                  to="/chat"
                  text="Go To Chat"
                  textcolor="black"
                />
                <NavigationLink
                  bg="#51538f"
                  textcolor="white"
                  to="/"
                  text="Logout"
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
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
