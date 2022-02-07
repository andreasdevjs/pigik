
import { combineReducers } from 'redux';
import menu from './menu.reducer';

// Aquí decimos cómo se va a llamar el trocito del estado que necesitaremos
// en los componentes.. (en los mapStateToProps)
export default combineReducers({
  menu
});