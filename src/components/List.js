import React from 'react';
import { getDatas } from '../services/musicService';
import Modal from './Modal.js';
import logo from '../assets/music-image.jpg';
import Pagination from "react-js-pagination";

class List extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            items: [],
            total: 0,
            activePage: 1,
            showModal: false,
            modalData: {},
        };

        this.handleClickModal = this.handleClickModal.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    async componentDidMount() {
		try {
            const result = await getDatas();
            this.setState({items: result.data, total: result.total});
		} catch (err) {
			console.log(err)
		}
    }

    async componentDidUpdate(prevProps) {
        if (this.props.isSubmited === prevProps.isSubmited){
           return;
        }
        try {
            const result = await getDatas();
            this.setState({items: result.data, total: result.total});
		} catch (err) {
			console.log(err)
		}
    }

    handleClickModal(item) {
        this.setState({
            showModal: true,
            modalData: item
        });
    }

    async handlePageChange(pageNumber) {
        try {
            const result = await getDatas(pageNumber);
            this.setState({activePage: pageNumber, items: result.data, total: result.total});
		} catch (err) {
			console.log(err)
		}
    }

	render() {
        const items = this.state.items;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const showModal = this.state.showModal;
        return (
            <div className="content-oder">
                {showModal
                    ? <Modal itemData={this.state.modalData} />
                    : null
                }
                {
                    items.map((item) =>
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
                    )
                }
                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.activePage}
                    totalItemsCount={this.state.total}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        );
	}
}

export default List;