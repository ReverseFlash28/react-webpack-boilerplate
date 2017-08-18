import React, {Component} from 'react';
import {
	Route as RouterWithLayout,
} from 'react-router-dom';

import Layout from '../layout';

class Route extends Component {
	render() {
		let component = this.props.component
		return (
			<RouterWithLayout {...this.props} component={undefined} render={(props) =>
				React.createElement(Layout, props, React.createElement(component, props))
			}/>
		);
	}
}

Route.propTypes = {};
Route.defaultProps = {};

export default Route;
