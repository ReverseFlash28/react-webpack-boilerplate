import React, {Component} from 'react';

import Header from '../header';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Layout extends Component {

	render() {
		return (
			<div id="app">
				<Header/>
				<Grid style={{marginTop:50}}>
					<Row>
						<Col md={12}>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
