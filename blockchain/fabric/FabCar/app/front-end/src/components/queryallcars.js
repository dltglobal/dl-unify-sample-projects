import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class QueryAllCars extends Component {
	constructor(props) {
		super(props);
		this.carList = this.carList.bind(this);
		this.state = { cars: {} };
	}

	async componentDidMount() {
		const url = "/api/queryallcars";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		console.log([data.response.proposal_response_payload.extension.response.payload]);
		this.setState({
			cars: [data.response.proposal_response_payload.extension.response.payload]
		});

		console.log(this.state);
		console.log(this.state.cars);
		console.log(this.state.cars[0]);
		console.log(JSON.parse(this.state.cars[0]).make);

	}

	carList() {
		let res = [];
		for (var i = 0; i < this.state.cars.length; i++) {
			res.push(
				<tr>
					<td>{JSON.parse(this.state.cars[i]).docType}</td>
					<td>{JSON.parse(this.state.cars[i]).make}</td>
					<td>{JSON.parse(this.state.cars[i]).model}</td>
					<td>{JSON.parse(this.state.cars[i]).color}</td>
					<td>{JSON.parse(this.state.cars[i]).owner}</td>
				</tr>
			)
		}
		return res;
	}

	render() {
		return (
			<body className="bg_queryAll">
				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>CAR ID</th>
							<th>MAKE</th>
							<th>MODEL</th>
							<th>COLOR</th>
							<th>OWNER</th>
						</tr>
					</thead>
					<tbody>
						{this.carList()}
					</tbody>
				</Table>
			</body>
		)
	}
}
