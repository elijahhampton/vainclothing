import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthenticationComponent from './pages/authentication/AuthenticationComponent';
import Header from './components/header/Header';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthenticationComponent} />
      </Switch>
    </div>
  );
}

export default App;
