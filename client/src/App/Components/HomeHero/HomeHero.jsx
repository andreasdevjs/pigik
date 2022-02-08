import React from 'react';
import { Box, Heading, Image  } from '@chakra-ui/react';

import './HomeHero.css';

import SavingsImage from '../../Assets/Images/save_money.svg';

function HomeHero() {
  return (
    <React.Fragment>
      <Box bg="#ecf2f7" textAlign='center' pb='50px' className='triangle'>
        <Heading color='#012347' fontFamily='GilroyBold' textAlign='center' as='h1' fontSize='40px' lineHeight='1' px={4} py={5}>
          El ahorro tiene recompensa
        </Heading>
        <Heading as='h2' color='#012347' fontFamily='GilroySemiBold' opacity='0.6' fontSize='18px' textAlign='center' px={4} pb={5}>
          Pigik te permite ir ahorrando para la compra del producto o servicio que deseas de una tienda online y además... <br /> ¡ganar recompensas por ello!
        </Heading>
        <Image margin='0 auto' width='350px' src={SavingsImage} alt='Savings' />
      </Box>
    </React.Fragment>
  );
}

export default HomeHero;