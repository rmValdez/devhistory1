"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import DashboardComponent from '@/appComponent/dashboardComponent/DashboardComponent';

export default function DashboardPage() {
  const { id } = useParams();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        My Profile
      </Typography>
      <Typography variant="body1" gutterBottom>
       <DashboardComponent/>
      </Typography>
    </Container>
  );
}
