import React from 'react';
import logo from '../assets/music-image.jpg';

class Item extends React.Component {
	constructor(props) {
        super(props);

        this.handleClickModal = this.handleClickModal.bind(this);
    }

    handleClickModal(item) {
        this.props.handleClickModal && this.props.handleClickModal(item);
    }

	render() {
        const item = this.props.item;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        return (
            <div className="row order" key={item.id}>
                <div className="col-md-3">
                    <div className="view z-depth-1 rounded video-thums">
                        {item.link.match(regExp)
                            ? <a className="link-image" data-toggle="modal" data-target={"#modal" + item.id} onClick={() => this.handleClickModal(item)}>
                                <img className="rounded img-fluid" src={logo} alt="Video title" />
                                <i className="fa fa-play"></i>
                            </a>
                            : <a className="link-image" target="_blank" href={item.link}>
                                <img className="rounded img-fluid" src={logo} alt="Video title" />
                                <i className="fa fa-play"></i>
                            </a>
                        }
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="box-script">
                        <div className="box-title" data-toggle="tooltip" title="" data-original-title={item.nameSing}>
                            <a target="_blank" href={item.link}>
                                <b className="glyphicon glyphicon-cd"></b>
                                <span>
                                    {item.nameSing}
                                </span>
                            </a>
                        </div>
                        <div className="box-infor">
                            <p>
                                <span className="from-to">Do </span>
                                <span className="short-name" data-toggle="tooltip" title="" data-original-title={item.nameSender}>  
                                    <b>{item.nameSender ? item.nameSender : '...'}</b>
                                </span>
                                <span className="from-to">&nbsp;gửi đến&nbsp;</span>
                                <span className="short-name" data-toggle="tooltip" title={item.nameReceiver}> 
                                    <b>{item.nameReceiver ? item.nameReceiver : '...'}</b>
                                </span>
                            </p>
                            <div className="box-mess">
                                <span> 
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                    &nbsp;Với lời nhắn...
                                </span>
                                <br />
                                <span className="short-mess">
                                    <span className="mess shortened">{item.message}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Item;