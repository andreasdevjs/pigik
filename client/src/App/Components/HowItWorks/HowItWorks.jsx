import React from 'react';
import { Box, Heading, Text  } from '@chakra-ui/react';

function HowItWorks() {
  return (
    <Box p={8}>
      <Heading as='h2' color='#012347' fontFamily='GilroyBold' fontSize='28px' textAlign='center'>
        ¿Cómo funciona?
      </Heading>
      <Box border='1px solid'>
        <Box>
          <Text>Cuando estés en una tienda online</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default HowItWorks;
