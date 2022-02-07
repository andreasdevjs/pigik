// Basic
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Pages
import Home from './Pages/Home/Home';
import FAQ from './Pages/FAQ/FAQ';

// Fonts
import './Assets/Fonts/Gilroy/Gilroy-Regular.otf';
import './Assets/Fonts/Gilroy/Gilroy-Semibold.otf';

// Base CSS
import './App.css';

// Main App
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/faq" element={<FAQ />} /> 
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
