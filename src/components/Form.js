import React from 'react';
import { setDatas } from '../services/musicService';
import { validateForm } from '../utils/utils';
import './Form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				link: '',
				nameSing: '',
				nameSender: '',
				nameReceiver: '',
				message: ''
			},
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let target = event.target;
		let value = target.value;
		let name = target.name;
		let fields = this.state.fields;
		fields[name] = value;
		this.setState({
			fields
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		try {
			const errorsForm = validateForm(this.state.fields);
			if (Object.keys(errorsForm).length) {
				this.setState({errors: errorsForm});
				return;
			}
			await setDatas(this.state.fields);
			this.props.handleSubmited();
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<div className="card">
				<h5 className="card-header info-color white-text text-center py-4">
					<strong>Order Music</strong>
				</h5>
				<div className="card-body px-lg-5 pt-0">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Link<em>*</em></label>
							<input type="text" className="form-control" name="link" value={this.state.fields.link} onChange={this.handleChange} placeholder="http://..." />
							<span style={{color: "red"}}>{this.state.errors["link"]}</span>
						</div>
						<div className="form-group">
							<label>Bài hát<em>*</em></label>
							<input type="text" className="form-control" name="nameSing" value={this.state.fields.nameSing} onChange={this.handleChange} placeholder="Tên bài hát..." />
							<span style={{color: "red"}}>{this.state.errors["nameSing"]}</span>
						</div>
						<div className="form-group">
							<label>Người gửi</label>
							<input type="text" className="form-control" name="nameSender" value={this.state.fields.nameSender} onChange={this.handleChange} placeholder="Họ và tên..." />
						</div>
						<div className="form-group">
							<label>Người nhận</label>
							<input type="text" className="form-control" name="nameReceiver" value={this.state.fields.nameReceiver} onChange={this.handleChange} placeholder="Họ và tên..." />
						</div>
						<div className="form-group">
							<label>Lời nhắn<em>*</em></label>
							<textarea className="form-control" name="message" value={this.state.fields.message} onChange={this.handleChange} placeholder="Viết lời nhắn..." />
							<span style={{color: "red"}}>{this.state.errors["message"]}</span>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
    }
}

export default Form;