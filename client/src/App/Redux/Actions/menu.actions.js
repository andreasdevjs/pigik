import {
  OPEN_MAIN_MENU,
  CLOSE_MAIN_MENU
} from "../Types/menu.types.js";

export const openMainMenu = () => ({
  type: OPEN_MAIN_MENU
});

export const closeMainMenu = () => ({
  type: CLOSE_MAIN_MENU
});