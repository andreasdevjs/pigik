import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMainMenu } from '../../Redux/Actions/menu.actions';

import { Box, Heading, Image, Link, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton.jsx';

import SatsLogo from '../../Assets/Images/Satoshi_regular_elipse.svg';

const Header = ({ menu, closeMainMenu}) => {
  return (
    <Box display='flex' alignItems='center' bg="rgb(44, 45, 48)" textAlign="left" paddingX={5} paddingY={4} color='white'>
      <Image width='20px' src={SatsLogo} alt='Satoshis symbol' />
      <Box marginLeft='auto'>
        <DrawerToggleButton />
      </Box>
      <Drawer
        isOpen={menu.mainMenuOpen}
        placement='right'
        onClose={closeMainMenu}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            Main manu open
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={closeMainMenu}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { closeMainMenu })(Header);