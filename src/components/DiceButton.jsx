import React from 'react';

const DiceButton = (props) => {
	return (
		<div className='dice-btns'>
			<button className='btn' onClick={props.hold}>
				hold
			</button>
			<button className='btn' onClick={props.roll}>
				roll
			</button>
		</div>
	);
};

export default DiceButton;
