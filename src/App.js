import './App.css';
import React from 'react';
import Player from './components/Player';
import DiceButton from './components/DiceButton';
import Dices from './components/Dices';

class App extends React.Component {
	state = {
		current_player: 1,
		current_score: 0,
		total_score1: 0,
		total_score2: 0,
		dices: [null, null],
		winner: null,
	};

	rollFunction = () => {
		const dice1 = Math.ceil(Math.random() * 6);
		const dice2 = Math.ceil(Math.random() * 6);

		// check if dice1 === 6 and dice2 === 6 => current_score = 0 => switch current player
		if (dice1 === 6 && dice2 === 6) {
			this.setState((state) => ({
				current_score: 0,
				current_player: this.state.current_player === 1 ? 2 : 1,
				dices: [dice1, dice2],
			}));
		}

		this.setState((state) => ({
			current_score: state.current_score + dice1 + dice2,
			dices: [dice1, dice2],
		}));
	};

	holdFunction = () => {
		const next_player = this.state.current_player === 1 ? 2 : 1;
		let winner = null;
		// check if current player reached 100 points, if so he is the winner

		this.setState((state) => {
			if (this.state.current_player === 1) {
				if (this.state.total_score1 + this.state.current_score >= 100) {
					winner = 'Player 1';
				}
			} else {
				if (this.state.total_score2 + this.state.current_score >= 100) {
					winner = 'Player 2';
				}
			}

			return {
				current_player: next_player,
				current_score: 0,
				winner: winner,
				total_score1:
					state.current_player === 1
						? state.total_score1 + state.current_score
						: state.total_score1,
				total_score2:
					state.current_player === 2
						? state.total_score2 + state.current_score
						: state.total_score2,
			};
		});
	};
	newGame = () => {
		this.setState({
			current_player: 1,
			current_score: 0,
			total_score1: 0,
			total_score2: 0,
			dices: [null, null],
			winner: null,
		});
	};
	current_score_1() {}

	render() {
		return (
			<div className='App'>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<div style={{ cursor: 'pointer' }} onClick={this.newGame}>
						+NEW GAME
					</div>
				</div>
				<div
					style={{
						alignItems: 'end',
						display: 'flex',
						justifyContent: 'space-around',
					}}>
					<Player
						playerNum={1}
						score={this.state.total_score1}
						current={
							this.state.current_player === 1 ? this.state.current_score : 0
						}
						isActive={this.state.current_player === 1}
					/>
					<div>
						<Dices dice1={this.state.dices[0]} dice2={this.state.dices[1]} />
						<DiceButton roll={this.rollFunction} hold={this.holdFunction} />
					</div>
					<Player
						playerNum={2}
						score={this.state.total_score2}
						current={
							this.state.current_player === 2 ? this.state.current_score : 0
						}
						isActive={this.state.current_player === 2}
					/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<h1>
						{this.state.winner !== null ? this.state.winner + ' won !' : null}
					</h1>
				</div>
			</div>
		);
	}
}

export default App;
