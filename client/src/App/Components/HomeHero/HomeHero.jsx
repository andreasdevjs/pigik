import React from 'react';
import { Box, Heading  } from '@chakra-ui/react';

import './HomeHero.css';

function HomeHero() {
  return (
    <React.Fragment>
      <Box bg="#ecf2f7" textAlign='center' pb='50px' className='triangle'>
        <Heading color='#012347' fontFamily='GilroyBold' textAlign='center' as='h1' fontSize='40px' lineHeight='1' px={4} py={5}>
          El ahorro tiene recompensa
        </Heading>
        <Heading as='h2' color='#012347' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' textAlign='center' px={4} pb={5}>
          Pigik permite que puedas ir ahorrando en el producto que te gusta de una tienda online y ganar recompensas por hacerlo
        </Heading>
      </Box>
    </React.Fragment>
  );
}

export default HomeHero;
