import { Box, Typography } from '@mui/material';
import React from 'react';

const BlogDetail = async ({ params }) => {
  const id = (await params).id;
  return (
    <Box>
      <Typography variant="h1" className="italic">
        BlogDetail of {id}
      </Typography>
    </Box>
  );
};

export default BlogDetail;
