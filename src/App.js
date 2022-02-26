import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import signInAndSignUpPage from './pages/signIn-signOut/signIn-signOut.component';

import Header from './component/header/header-component';


const Hatspage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
)


const App = () =>  {
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


export default App;
