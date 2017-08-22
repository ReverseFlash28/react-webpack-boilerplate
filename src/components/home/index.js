import React, {Component} from 'react';
import style from './style.less';

import {Glyphicon} from 'react-bootstrap';

export default class Home extends Component {
	state = {}

	componentDidMount() {
		this.time = setInterval(() => {
			this.setState({time: new Date().toLocaleString()})
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
				<Glyphicon glyph="chevron-left"/>
				<p>{this.state.time || ''}</p>
			</div>
		);
	}
}
