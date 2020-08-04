import React from 'react';
import { getDatas } from '../services/musicService';
import Modal from './Modal.js';
import logo from '../assets/music-image.jpg';
import Pagination from "react-js-pagination";
import Item from './Item';

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
        const showModal = this.state.showModal;
        return (
            <div className="content-oder">
                {showModal
                    ? <Modal itemData={this.state.modalData} />
                    : null
                }
                {
                    items.map((item) =>
                        <Item key={item.id} item={item} handleClickModal={this.handleClickModal} />
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