import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthenticationComponent from './pages/authentication/AuthenticationComponent';
import Header from './components/header/Header';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import React from 'react';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(documentSnapshot => {
          setCurrentUser({
              id: documentSnapshot.id,
              ...documentSnapshot.data()
          })
        })
      } else {
    
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
