"use client";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        p: .5,
      }}
    >
      <Header />
      <Container maxWidth="xl" sx={{ flex: "1 0 auto" }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
