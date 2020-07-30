import React from 'react';
import Form from './components/Form.js';
import List from './components/List.js';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			items: [],
			reLoad: false
		};

		this.submitFormData = this.submitFormData.bind(this);
	}
	
	componentDidMount() {
        let url = "http://localhost:3000/posts";
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
	
	submitFormData(event) {
		event.preventDefault();
		let url = "http://localhost:3000/posts";
        fetch(url, {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type": 'application/json'
			},
			mode:'cors'
		})
		.then(res => res.json())
		.then(data => {
			this.setState({
				reLoad: true
			})
		})
        .catch(error => {
            console.log(error);
        })
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-4">
						<Form submitFormData={this.submitFormData}/>
					</div>
					<div className="col-sm-8">
						<List items={this.state.items}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
