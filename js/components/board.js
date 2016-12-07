import React from 'react';
import List from './list';

export default function Board(props) {
	

	return (
		//use map method

		<div className = "board">
			<div className="title">{props.title}</div>
			<div className="lists">{props.lists}</div>
			<List cards={props.december}/>
			
		</div>
	);
}
