import React, {Component} from 'react';
import style from './style.less';

import {Glyphicon} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {test} from 'actions';

class Home extends Component {
	state = {}

	componentDidMount() {
		this.time = setInterval(() => {
			this.setState({time: new Date().toLocaleString()});
			this.props.actions.test({time:new Date().toLocaleString()});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.time);
	}


	render() {
		return (
			<div className={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<p>Redux test: {JSON.stringify(this.props.test)}</p>
				<p>{this.state.time || ''}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	var {test} = state;
	const props = {test};
	return props;
}

function mapDispatchToProps(dispatch) {
	const actions = {test};
	const actionMap = {
		actions: bindActionCreators(actions, dispatch)
	};
	return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
