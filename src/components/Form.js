import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div class="form-group">
					<label for="link">Link</label>
					<input type="text" class="form-control" name="link" placeholder="http://..." />
				</div>
				<div class="form-group">
					<label for="link">Bài hát</label>
					<input type="text" class="form-control" name="nameSing" placeholder="Tên bài hát..." />
				</div>
				<div class="form-group">
					<label for="link">Người gửi</label>
					<input type="text" class="form-control" name="nameSender" placeholder="Họ và tên..." />
				</div>
				<div class="form-group">
					<label for="link">Người nhận</label>
					<input type="text" class="form-control" name="nameReceiver" placeholder="Họ và tên..." />
				</div>
				<div class="form-group">
					<label for="link">Lời nhắn</label>
					<input type="text" class="form-control" name="message" placeholder="Viết lời nhắn..." />
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		);
    }
}

export default Form;