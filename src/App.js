import React from 'react';
import Form from './components/Form.js';
import List from './components/List.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-4">
						<Form />
					</div>
					<div class="col-sm-8">
						<List />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
