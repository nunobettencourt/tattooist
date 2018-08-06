import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

import HeaderBar from './components/navigation/headerBar';

import Home from './containers/home';

const App = () => (
  <div>
    <CssBaseline />
    <HeaderBar/>
    <Route exact path="/" component={Home} />
  </div>
)

export default App;
