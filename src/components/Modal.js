import React from 'react';

class Modal extends React.Component {
	constructor(props) {
        super(props);

        this.convertUrl = this.convertUrl.bind(this);
    }

    convertUrl(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
        ? match[2]
        : null;
    }

	render() {
        const item = this.props.itemData;
        const link = "//www.youtube.com/embed/" + this.convertUrl(item.link);
        return (
            <div className="modal fade" id={"modal" + item.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <iframe  id="player" className="embed-responsive-item" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Modal;