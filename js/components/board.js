import React from 'react';
import List from './list';

export default function Board(props) {
	const cards = [];
	for (let i = 0; i < 3; i++) {
		cards.push(<List />);
	}

	return (
		<div className = "board">
			<div className="title">{props.title}</div>
			<div className="lists">{props.lists}</div>
			<List cards={props.december}/>
			{cards}
		</div>
	);
}
