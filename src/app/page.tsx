"use client"; // Ensure this file is treated as a Client Component

import React, { Fragment } from 'react';
import { Typography, Button } from '@mui/material';
import Main from '@/appComponent/Main';

export default function Home() {
  return (
    <Main>
      <Fragment>

      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Next.js App with MUI
      </Typography>
      <Typography variant="body1" gutterBottom>
        App Router with Next js and Material Ui
      </Typography>

      <Button variant="contained" color="primary">
        Get Started
      </Button>
      </Fragment>
    </Main>
  );
}
