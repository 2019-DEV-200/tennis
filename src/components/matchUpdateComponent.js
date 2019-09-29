import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { gameStart, deuce, game_AWin, game_BWin } from '../constant/scoreBoard.constant';
import { UpdateBannerDiv, UpdateBannerText } from './common.Styled';
import { gameStatusValuated } from './scoreBoard.Util';

class MatchUpdateComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	checkGameStatus(playerAScore, playerBScore, numberABtnClick, numberBBtnClick) {
		const gameStatusValue = gameStatusValuated(playerAScore, playerBScore, numberABtnClick, numberBBtnClick);
		if (gameStatusValue === 'gameStart') {
			return <FormattedMessage id={gameStart} />;
		} else if (gameStatusValue === 'deuce') {
			return <FormattedMessage id={deuce} />;
		} else if (gameStatusValue === 'game_AWin') {
			return <FormattedMessage id={game_AWin} />;
		} else if (gameStatusValue === 'game_BWin') {
			return <FormattedMessage id={game_BWin} />;
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
