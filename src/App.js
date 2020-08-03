import React from 'react';
import './assets/App.css';
import Form from './components/Form.js';
import List from './components/List.js';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			items: [],
			offset: 0,
			perPage: 3,
			currentPage: 0
		};

		this.submitFormData = this.submitFormData.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	
	componentDidMount() {
        this.getData();
	}

	getData() {
		const url = "https://music-order-server.herokuapp.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => {
			let dataReverse = data.reverse();
			let dataPerPage = dataReverse.slice(this.state.offset, this.state.offset + this.state.perPage);
            this.setState({
				items: dataPerPage,
				totalPage: Math.ceil(data.length / this.state.perPage)
            })
        
        })
        .catch(error => {
            console.log(error);
        })
	}

	handlePageClick(e) {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getData()
        });

    };
	
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
		.then(res => res.json())
        .then(data => {
			this.getData();
			// this.setState({
			// 	items: [data].concat(this.state.items),
			// });
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
						<List items={this.state.items} handlePageClick={this.handlePageClick} totalPage={this.state.totalPage} />
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default App;
