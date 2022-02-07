import React from 'react';
import { Box, Heading, Text  } from '@chakra-ui/react';

function HowItWorks() {
  return (
    <Box p={8} bg="rgb(44, 45, 48)">

      <Heading as='h2' color='white' fontFamily='GilroyBold' fontSize='28px' textAlign='center'>
        How it works
      </Heading>

      <Box margin='0 auto' width='120px' height='5px' bgColor='#F7931A'></Box>

      <Box display='flex' flexDirection='column' py='32px'>

        <Box bgColor='rgb(53, 54, 58)' p={5} borderRadius='12px' mb={5}>
          <Text fontSize='18px' fontWeight='bold' color='white'>
            STEP 1
          </Text>
          <Text fontSize='16px' color='white' pt={2} lineHeight={1.3} opacity={0.8}>
            Register for free with an email and a nickname in less than 30 seconds
          </Text>
        </Box>

        <Box bgColor='rgb(53, 54, 58)' p={5} borderRadius='12px' mb={5}>
          <Text fontSize='18px' fontWeight='bold' color='white'>
            STEP 2
          </Text>
          <Text fontSize='16px' color='white' pt={2} lineHeight={1.3} opacity={0.8}>
            Publish an ad where you offer or demand a product or service*
          </Text>
        </Box>

        <Box bgColor='rgb(53, 54, 58)' p={5} borderRadius='12px'>
          <Text fontSize='18px' fontWeight='bold' color='white'>
            STEP 3
          </Text>
          <Text fontSize='16px' color='white' pt={2} lineHeight={1.3} opacity={0.8}>
            Pay or receive satoshis for the service directly peer-to-peer without intermediaries
          </Text>
        </Box>

        <Box>
          <Text fontSize='12px' color='white' textAlign='center' pt={5} lineHeight={1.3}>
            *Posting an ad costs 1000 sats as anti-spam paywall
          </Text>
        </Box>

      </Box>

    </Box>
  );
}

export default HowItWorks;
