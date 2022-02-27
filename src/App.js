import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import { auth } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import signInAndSignUpPage from './pages/signIn-signOut/signIn-signOut.component';

import Header from './component/header/header-component';



class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user});

			console.log(user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
		  <div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route excat path='/shop' component={ShopPage} />
					<Route excat path='/signin' component={signInAndSignUpPage} />
				</Switch>
			</div>
		)
	}	
}



export default App;
