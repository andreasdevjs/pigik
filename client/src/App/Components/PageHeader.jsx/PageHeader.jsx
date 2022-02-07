import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function PageHeader({ pageTitle }) {
  return (
    <Box p={5} bg="rgb(44, 45, 48)" textAlign='center'>
      <Heading color='white'>
        {pageTitle}
      </Heading>
    </Box>
  );
}

export default PageHeader;
