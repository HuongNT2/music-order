import React from 'react';
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
	
	submitFormData(data) {
		let url = "http://localhost:3000/posts";
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
				<div className="row">
					<div className="col-sm-4">
						<Form handleSubmit={this.submitFormData}/>
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
