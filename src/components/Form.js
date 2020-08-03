import React from 'react';

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
		this.handleValidation = this.handleValidation.bind(this);
	}

	handleValidation() {
		let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Link
        if(!fields["link"]){
           formIsValid = false;
           errors["link"] = "Link bài hát là bắt buộc!";
        }

        if(typeof fields["link"] !== "undefined"){
           if(!fields["link"].match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
              formIsValid = false;
              errors["link"] = "Hãy nhập link là một url!";
           }
        }

        //nameSing
        if(!fields["nameSing"]){
           formIsValid = false;
           errors["nameSing"] = "Hãy nhập tên bài hát!";
		}

		//message
        if(!fields["message"]){
			formIsValid = false;
			errors["message"] = "Hãy nhập lời nhắn!";
		 }

       this.setState({errors: errors});
       return formIsValid;
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

	handleSubmit(event) {
		event.preventDefault();
		if (this.handleValidation()) {
			this.props.handleSubmit && this.props.handleSubmit(this.state.fields);
		} else {
			console.log('Form errors');
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