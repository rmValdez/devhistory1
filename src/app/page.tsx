"use client"; // Ensure this file is treated as a Client Component

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Next.js App with MUI
      </Typography>
      <Typography variant="body1" gutterBottom>
        App Router with Next js and Material Ui
      </Typography>

      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}
