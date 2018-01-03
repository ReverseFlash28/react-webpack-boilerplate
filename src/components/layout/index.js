import React, {Component} from 'react';

import Header from '../header';
import { Container, Row, Col } from 'reactstrap';

export default class Layout extends Component {

	render() {
		return (
			<div id="app">
				<Header/>
				<Container style={{marginTop:50}}>
					<Row>
						<Col md={12}>
							{this.props.children}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
