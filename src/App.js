import React from 'react';
import './assets/App.css';
import Form from './components/Form.js';
import List from './components/List.js';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			items: []
		};

		this.submitFormData = this.submitFormData.bind(this);
	}
	
	componentDidMount() {
        const url = "https://music-order-server.herokuapp.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                items: data
            })
        
        })
        .catch(error => {
            console.log(error);
        })
	}
	
	submitFormData(data) {
		const url = "https://music-order-server.herokuapp.com/posts";
        fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": 'application/json'
			},
			mode:'cors'
		})
		.then(res => {
			this.setState({
				items:this.state.items.concat(data)
			});
		})
        .catch(error => {
            console.log(error);
        })
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="mask rgba-gradient">
				<div className="row">
					<div className="col-sm-4">
						<Form handleSubmit={this.submitFormData}/>
					</div>
					<div className="col-sm-1"></div>
					<div className="col-sm-7">
						<List items={this.state.items}/>
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default App;
