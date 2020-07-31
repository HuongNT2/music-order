import React from 'react';

class Modal extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
        const item = this.props.itemData;
        console.log('modal item:' + item.id);
        return (
            <div className="modal fade" id={"modal" + item.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <iframe  id="player" className="embed-responsive-item" src={item.link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Modal;