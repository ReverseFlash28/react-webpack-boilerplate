import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route as RouteWithoutLayout,
	Switch
} from 'react-router-dom';

import Route from './route';
import Home from './home';
import Profile from './profile';
import Login from './login';

export default class App extends Component {

	render() {
		return (
			<div id="app">
				<Router>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/profile" component={Profile}/>
						<Route path="/profile/:user" component={Profile}/>
						<RouteWithoutLayout exact path="/login" component={Login}/>
					</Switch>
				</Router>
			</div>
		);
	}
}
