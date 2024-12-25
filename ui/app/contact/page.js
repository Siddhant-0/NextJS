import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <Box>
      <Typography variant="h2">Contact</Typography>
      <Link href="/" style={{ color: 'green' }}>
        Go to home
      </Link>
    </Box>
  );
};

export default Contact;
