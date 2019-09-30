// Declaration of node module at the top
import React from 'react';
import { page_Title, player_A, player_B } from '../constant/scoreBoard.constant';
import ScoreBoardComponent from '../components/scoreBoardComponent';
import MatchUpdateComponent from '../components/matchUpdateComponent';
import { MainContainer, PlayerA, PlayerB } from './miscellaneous.Styled';

class MiscellaneousContainer extends React.Component {
	constructor(props) {
		super(props);
		// Declaration of state variables so as to hold
		this.state = {
			playerAScore: 0,
			playerBScore: 0,
			numberABtnClick: 1,
			numberBBtnClick: 1,
			gameOver: false
		};
	}

	// Declaration of life cycle event after render
	componentDidMount() {
		document.title = page_Title;
	}

	// When player A button clciked
	playerAHitsStroke(numberofAHits) {
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick } = this.state;
		if (
			(numberABtnClick >= 4 && numberBBtnClick <= 3) ||
			(playerAScore === 40 && playerBScore === 40 && numberABtnClick - numberBBtnClick >= 1)
		) {
			this.setState({ gameOver: true });
		}
		if (numberofAHits === 1) {
			this.setState({ playerAScore: 15 });
		} else if (numberofAHits === 2) {
			this.setState({ playerAScore: 30 });
		} else if (numberofAHits === 3) {
			this.setState({ playerAScore: 40 });
		}
		// State value is incremented by 1
		this.setState({ numberABtnClick: this.state.numberABtnClick + 1 });
	}

	playerBHitsStroke(numberofBHits) {
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick } = this.state;
		if (
			(numberBBtnClick >= 4 && numberABtnClick <= 3) ||
			(playerAScore === 40 && playerBScore === 40 && numberBBtnClick - numberABtnClick >= 1)
		) {
			this.setState({ gameOver: true });
		}
		if (numberofBHits === 1) {
			this.setState({ playerBScore: 15 });
		} else if (numberofBHits === 2) {
			this.setState({ playerBScore: 30 });
		} else if (numberofBHits === 3) {
			this.setState({ playerBScore: 40 });
		}
		// State value is incremented by 1
		this.setState({ numberBBtnClick: this.state.numberBBtnClick + 1 });
	}

	render() {
		// Destructuring of state
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick, gameOver } = this.state;
		return (
			<React.Fragment>
				<MainContainer>
					{/* Passnig Props to scoreBoard Component */}
					<ScoreBoardComponent playerAScore={playerAScore} playerBScore={playerBScore} />

					<PlayerA
						label={player_A}
						className={`redBtn`}
						onClick={() => this.playerAHitsStroke(numberABtnClick)}
						disabled={gameOver}
					/>
					<PlayerB
						label={player_B}
						className={`greenBtn`}
						onClick={() => this.playerBHitsStroke(numberBBtnClick)}
						disabled={gameOver}
					/>
					{/* Passnig Props to Match Update Component */}
					<MatchUpdateComponent
						playerAScore={playerAScore}
						playerBScore={playerBScore}
						numberABtnClick={numberABtnClick}
						numberBBtnClick={numberBBtnClick}
					/>
				</MainContainer>
			</React.Fragment>
		);
	}
}

export default MiscellaneousContainer;
