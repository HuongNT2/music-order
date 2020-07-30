import React from 'react';
import ReactPlayer from "react-player";

class List extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
        const items = this.props.items;
        return (
            <div>
                {
                    items.map((item, id) => 
                        <div className="media" key={id}>
                            <ReactPlayer width="300" height="250"
                                url={item.link}
                            />
                            <div className="media-body">
                                <h4 className="mt-0">{item.nameSing}</h4>
                                <p>Do {item.nameSender} gửi đến {item.nameReceiver}</p>
                                <p>{item.message}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
	}
}

export default List;