import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import DefaultTheme from './theme';
import MyFavorites from './components/MyFavorites';

export default function App() {
  return (
    <BrowserRouter>
     <ThemeProvider theme={DefaultTheme}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/favorites' component={MyFavorites} />
        <Redirect to='/' />
      </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
