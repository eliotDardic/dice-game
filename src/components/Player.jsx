import React from 'react';

const Player = (props) => {
	return (
		<div style={{ color: props.isActive ? 'black' : 'grey' }}>
			<h1>PLAYER {props.playerNum}</h1>
			<h1>{props.score}</h1>
			<div style={{ height: '10vh' }}></div>
			<h1 style={{ height: '10vh', backgroundColor: 'red', color: 'white' }}>
				{props.current}
			</h1>
		</div>
	);
};

export default Player;
