import React from 'react';
import Card from './card';

export default function List() {
	return (
		<div className= "list" title="cards"> 
			<Card title= "Carlo Jesena"
				  cards= "hello carlo"
							/>
			<Card title= "Alex Poe"
				  cards= "hello alex"
							/>
			<Card title= "Rodrigo Alves"
				  cards= "hello rodrigo"
							/>										
		</div>
	);
}
