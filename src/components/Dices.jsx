import React from 'react';

const Dices = (props) => {
	return (
		<div className='dice'>
			{props.dice1} | {props.dice2}
		</div>
	);
};

export default Dices;
