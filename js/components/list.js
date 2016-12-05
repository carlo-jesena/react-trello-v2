import React from 'react';
import Card from './card';

export default function List(props) {
	const cards = [];
	for (let i = 0; i < 3; i++) {
		cards.push(<List />);
	}

	return (
		<div className= "list" title="cards"> 
			<Card title= "Carlo Jesena"
				  words= {props.cards[0]}
							/>
			<Card title= "Alex Poe"
				  words= {props.cards[1]}
							/>
			<Card title= "Rodrigo Alves"
				  words= {props.cards[2]}
							/>	

							{/*<div>{props.january}</div>*/}									
		</div>
	);
}
