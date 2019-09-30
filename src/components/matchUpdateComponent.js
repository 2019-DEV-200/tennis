import React from 'react';
import { UpdateBannerDiv, UpdateBannerText } from './common.Styled';
import { gameStatusValuated } from './scoreBoard.Util';

class MatchUpdateComponent extends React.Component {
	render() {
		// destructuring of props
		const { playerAScore, playerBScore, numberABtnClick, numberBBtnClick } = this.props;
		return (
			<React.Fragment>
				<UpdateBannerDiv>
					<UpdateBannerText />
					{gameStatusValuated(playerAScore, playerBScore, numberABtnClick, numberBBtnClick)}
				</UpdateBannerDiv>
			</React.Fragment>
		);
	}
}

export default MatchUpdateComponent;
