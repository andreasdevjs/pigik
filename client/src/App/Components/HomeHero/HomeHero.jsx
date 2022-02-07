import React from 'react';
import { Box, Heading, Button, Text  } from '@chakra-ui/react';

import './HomeHero.css';

function HomeHero() {
  return (
    <React.Fragment>
      <Box bg="rgb(44, 45, 48)" textAlign='center' pb='50px' className='triangle'>
        <Heading color='white' fontFamily='GilroySemiBold' className='' textAlign='center' as='h1' fontSize='37px' lineHeight='1' px={4} py={5}>
          Welcome to the Bitcoin economy
        </Heading>
        <Heading as='h2' color='white' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' textAlign='center' px={4} pb={5}>
          Stacksats is the first bulletin board under the bitcoin economy. Earn bitcoin by selling what you don't need or offering your services or knowledge in exchange for them!
        </Heading>
        <Box display='flex' justifyContent='center' pb={8}>
          <Box color='white'>
            <Text color='white' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' lineHeight={1.3} mr={3}>
              P2P ✔
            </Text>
          </Box>
          <Box color='white'>
            <Text color='white' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' lineHeight={1.3} mr={3}>
              No intermediaries ✔
            </Text>
          </Box>
          <Box color='white'>
            <Text color='white' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' lineHeight={1.3}>
              No KYC ✔
            </Text>
          </Box>
        </Box>
        <Button size='md' height='48px' colorScheme='teal' color='white' variant='outline' fontFamily='GilroySemiBold' mr={3}>
          Explore
        </Button>
        <Button size='md' height='48px' colorScheme='teal' fontFamily='GilroySemiBold'>
          Create a posting
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default HomeHero;
