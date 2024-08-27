"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ top: 0, width: '100%' }}>
      <Toolbar sx={{ width: '100%', paddingLeft: 0, paddingRight: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="body1" component="div" sx={{ mr: 2 }}>
            RM
          </Typography>
          <Typography variant="h6" component="div">
            Header
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
