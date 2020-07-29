import React from 'react';
import ReactPlayer from "react-player";

class List extends React.Component {
	constructor(props) {
        super(props);
	}

	render() {
        const datas = [
            {
                link: 'https://www.youtube.com/watch?v=WNTmna9gOug',
                nameSing: 'Yuki no hana',
                nameSender: 'HuongNT',
                nameReceiver: 'Lily',
                message: 'Can you hear me!'
            },
            {
                link: 'https://www.youtube.com/watch?v=WNTmna9gOug',
                nameSing: 'Yuki no hana',
                nameSender: 'HuongNT',
                nameReceiver: 'Lily',
                message: 'Can you hear me!'
            },
            {
                link: 'https://www.youtube.com/watch?v=WNTmna9gOug',
                nameSing: 'Yuki no hana',
                nameSender: 'HuongNT',
                nameReceiver: 'Lily',
                message: 'Can you hear me!'
            }
        ];
		return (
			<div>
                {
                    datas.map(data => (
                        <div class="media">
                            <ReactPlayer
                                url={data.link}
                            />
                            <div class="media-body">
                                <h4 class="mt-0">{data.nameSing}</h4>
                                <p>Do {data.nameSender} gửi đến {data.nameReceiver}</p>
                                <p>{data.message}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
		);
	}
}

export default List;