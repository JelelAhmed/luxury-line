import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header-component';

import { setCurrentUser } from './redux/user/user.actions';
import signInAndSignUpPage from './pages/signIn-signOut/signIn-signOut.component';





class App extends React.Component {


	unsubscribeFromAuth = null;

	componentDidMount() {

		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				});
				
			} else {
					setCurrentUser(
						userAuth
					)
				}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
		  <div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route excat path='/shop' component={ShopPage} />
					<Route excat path='/signin' component={signInAndSignUpPage} />
				</Switch>
			</div>
		)
	}	
}


const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
