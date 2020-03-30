import React from 'react';
import './App.css';
import LandingPage from './pages/landing-page/landing-page-component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page-component'
import Header from '../src/components/header/header-component'
import SignInAndSignUp from '../src/pages/signIn-SignUp/signIn-signUp-component';

function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
          <Route exact='true' path="/" component={LandingPage}/>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component = {SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
