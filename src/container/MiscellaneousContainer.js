import React from 'react';
import { injectIntl } from 'react-intl';
import ScoreBoardComponent from '../components/scoreBoardComponent';
import MatchUpdateComponent from '../components/matchUpdateComponent';
import { MainContainer, PlayerA, PlayerB } from './miscellaneous.Styled';
import { gameStatusValuated } from '../components/scoreBoard.Util';

class MiscellaneousContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerAScore: 0,
			playerBScore: 0,
			numberABtnClick: 1,
			numberBBtnClick: 1,
			gameOver: false
		};
	}

	componentDidMount() {
		document.title = 'Welcome to the Kata Tennis Page';
	}

	playerAHitsStroke(numberofAHits) {
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick, gameOver } = this.state;
		if (!gameOver) {
			if (numberofAHits === 1) {
				this.setState({ playerAScore: 15 });
			} else if (numberofAHits === 2) {
				this.setState({ playerAScore: 30 });
			} else if (numberofAHits === 3) {
				this.setState({ playerAScore: 40 });
			}
			this.CheckGameStatusUI(playerAScore, playerBScore, numberABtnClick, numberBBtnClick);
			this.setState({ numberABtnClick: this.state.numberABtnClick + 1 });
		}
	}

	playerBHitsStroke(numberofBHits) {
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick, gameOver } = this.state;
		if (!gameOver) {
			if (numberofBHits === 1) {
				this.setState({ playerBScore: 15 });
			} else if (numberofBHits === 2) {
				this.setState({ playerBScore: 30 });
			} else if (numberofBHits === 3) {
				this.setState({ playerBScore: 40 });
			}
			//this.CheckGameStatusUI(playerAScore, playerBScore, numberABtnClick, numberBBtnClick);
			this.setState({ numberBBtnClick: this.state.numberBBtnClick + 1 });
		}
	}

	CheckGameStatusUI(playerAScore, playerBScore, numberABtnClick, numberBBtnClick, gameOver) {
		const gameOvercheck = gameStatusValuated(playerAScore, playerBScore, numberABtnClick, numberBBtnClick);
		if (gameOvercheck === 'game_AWin' || gameOvercheck === 'game_BWin') {
			return this.setState({ gameOver: true });
		}
	}

	render() {
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick, gameOver } = this.state;
		return (
			<React.Fragment>
				<MainContainer>
					<ScoreBoardComponent playerAScore={playerAScore} playerBScore={playerBScore} />

					<PlayerA
						label="Player A"
						className={`redBtn`}
						onClick={() => this.playerAHitsStroke(numberABtnClick)}
						//disabled={gameOver}
					/>
					<PlayerB
						label="Player B"
						className={`greenBtn`}
						onClick={() => this.playerBHitsStroke(numberBBtnClick)}
						//disabled={gameOver}
					/>
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

export default injectIntl(MiscellaneousContainer);
