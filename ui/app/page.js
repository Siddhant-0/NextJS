'use client';
import { Box, Button, Typography } from '@mui/material';
// import { redirect } from 'next/dist/server/api-utils';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {
  const router = useRouter();
  return (
    <Box>
      <Typography variant="h2">Home</Typography>
      <div className="flex flex-row gap-8">
        <Button
          variant="contained"
          color="success"
          sx={{ margin: '1 rem' }}
          onClick={() => {
            router.push('/contact');
          }}
        >
          Go to Contact
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            router.push('/about');
          }}
        >
          Go to About
        </Button>
      </div>
    </Box>
  );
};

export default Home;
