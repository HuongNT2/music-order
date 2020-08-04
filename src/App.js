import React from 'react';
import './assets/App.css';
import Form from './components/Form.js';
import List from './components/List.js';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			isSubmited: false,
		}
		this.handleSubmited = this.handleSubmited.bind(this);
	}

	handleSubmited = () => {
		this.setState({
			isSubmited: !this.state.isSubmited,
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="mask rgba-gradient">
				<div className="row">
					<div className="col-sm-4">
						<Form handleSubmited={this.handleSubmited}/>
					</div>
					<div className="col-sm-1"></div>
					<div className="col-sm-7">
						<List isSubmited={this.state.isSubmited}/>
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default App;
