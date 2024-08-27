"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 1,
        mt: "auto",
        borderTop: "1px solid black",
        backgroundColor: "background.paper", 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 Valdez, Reign Mark B. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
