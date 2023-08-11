import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Routes from "../Routes/Routes";
import { useEffect, useState } from "react";

// TODO remove, this demo shouldn't need to reset the theme.

export default function Dashboard() {

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      <NavBar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} isMobile={isMobile}/>
      {!isMobile && 
        <SideBar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
      }
      <Box sx={{ ml: 2, mt: "5rem", width: "100%", mr: 2 }}>
        <Routes />
      </Box>
    </Box>
  );
}
