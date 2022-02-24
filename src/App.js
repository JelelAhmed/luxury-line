import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';


const Hatspage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
)


const App = () =>  {
		return (
		  <div>
					<Route exact path='/' component={HomePage} />
					<Route excat path='/shop' component={ShopPage} />
			</div>
		)
}


export default App;
