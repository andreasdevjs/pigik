import {
  OPEN_MAIN_MENU,
  CLOSE_MAIN_MENU
} from "../Types/menu.types";

const initialMenuState = {
  mainMenuOpen: false,
};

export default function menuReducer(state = initialMenuState, action) {
  const { type } = action;

  switch (type) {
    case OPEN_MAIN_MENU:
      return { 
        ...state, 
        mainMenuOpen: true 
      }

    case CLOSE_MAIN_MENU:
      return { 
        ...state, 
        mainMenuOpen: false 
      }

    default:
      return state;
  }
}