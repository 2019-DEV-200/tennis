import React from 'react';
import { injectIntl } from 'react-intl';
import { UpdateBannerDiv, UpdateBannerText } from './common.Styled';
import { gameStatusValuated } from './scoreBoard.Util';

class MatchUpdateComponent extends React.Component {
	checkGameStatus(playerAScore, playerBScore, numberABtnClick, numberBBtnClick) {
		const gameStatusValue = gameStatusValuated(playerAScore, playerBScore, numberABtnClick, numberBBtnClick);
		if (gameStatusValue === 'gameStart') {
			return 'Game Start';
		} else if (gameStatusValue === 'deuce') {
			return 'Deuce';
		} else if (gameStatusValue === 'game_AWin') {
			return 'Hurrey Player A win the game.';
		} else if (gameStatusValue === 'game_BWin') {
			return 'Hurrey Player B win the game.';
		}
	}

	render() {
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick } = this.props;
		return (
			<React.Fragment>
				<UpdateBannerDiv>
					<UpdateBannerText />
					{this.checkGameStatus(playerAScore, playerBScore, numberABtnClick, numberBBtnClick)}
				</UpdateBannerDiv>
			</React.Fragment>
		);
	}
}

export default injectIntl(MatchUpdateComponent);
