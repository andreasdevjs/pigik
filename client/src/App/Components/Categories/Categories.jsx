import React from 'react'; 
import { Box, Heading  } from '@chakra-ui/react';

function Categories() {
  return (
    <Box p={8}>
      <Heading as='h2' color='rgb(44, 45, 48)' fontFamily='GilroyBold' fontSize='28px' textAlign='center'>
        Browse categories
      </Heading>
      <Heading as='h3' color='rgb(44, 45, 48)' fontFamily='GilroyBold' fontSize='16px' textAlign='center' opacity={0.7} my={2}>
        People from all over the world offer their products, services, time or knowledge in exchange for satoshis. #BitcoinIsMoney
      </Heading>
    </Box>
  );
}

export default Categories;
