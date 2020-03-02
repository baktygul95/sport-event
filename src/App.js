import React from 'react';
import './App.css';
import {ROUTES} from './router';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {HeaderComponent} from './components/header';
import {renderRoutes} from 'react-router-config';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/footer";

const history = createBrowserHistory();

const App = () => {

  const renderCustomRoutes = () => {
    return ROUTES
  };

  return (
    <Router history={history}>
      <HeaderComponent/>
      {renderRoutes(renderCustomRoutes())}
      <Footer/>
    </Router>
  )

};

export default App;
