import React from 'react';
import { connect } from 'react-redux';
import { closeMainMenu } from '../../Redux/Actions/menu.actions';

import { Box, Image, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton.jsx';

import Logo from '../../Assets/Images/pigik-logo.png';

const Header = ({ menu, closeMainMenu}) => {
  return (
    <Box display='flex' alignItems='center' textAlign="left" p={5} bg="#ecf2f7">
      <Image width='80px' src={Logo} alt='Pigik Logo' />
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