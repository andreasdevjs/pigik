import React from 'react';
import { connect } from 'react-redux';
import { openMainMenu } from '../../Redux/Actions/menu.actions';

import './DrawerToggleButton.css';

const DrawerToggleButton = ({openMainMenu}) => {
  return (
    <button className="menubutton" onClick={openMainMenu}>
      <div className="menubutton__line"></div>
      <div className="menubutton__line"></div>
      <div className="menubutton__line"></div>
    </button>
  );
}

export default connect(null, { openMainMenu })(DrawerToggleButton);