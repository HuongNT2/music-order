import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			link: '',
			nameSing: '',
			nameSender: '',
			nameReceiver: '',
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		return this.props.submitFormData;
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>Link</label>
					<input type="text" className="form-control" name="link" onChange={this.handleChange} placeholder="http://..." />
				</div>
				<div className="form-group">
					<label>Bài hát</label>
					<input type="text" className="form-control" name="nameSing" onChange={this.handleChange} placeholder="Tên bài hát..." />
				</div>
				<div className="form-group">
					<label>Người gửi</label>
					<input type="text" className="form-control" name="nameSender" onChange={this.handleChange} placeholder="Họ và tên..." />
				</div>
				<div className="form-group">
					<label>Người nhận</label>
					<input type="text" className="form-control" name="nameReceiver" onChange={this.handleChange} placeholder="Họ và tên..." />
				</div>
				<div className="form-group">
					<label>Lời nhắn</label>
					<input type="text" className="form-control" name="message" onChange={this.handleChange} placeholder="Viết lời nhắn..." />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
    }
}

export default Form;