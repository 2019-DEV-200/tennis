import { gameStart, game_AWin, game_BWin, advantage_A, advantage_B, deuce } from '../constant/scoreBoard.constant';

export function gameStatusValuated(playerAScore, playerBScore, numberABtnClick, numberBBtnClick) {
	if (numberABtnClick === 1 && numberBBtnClick === 1) {
		return gameStart;
	} else if (playerAScore === 40 && playerBScore === 40 && numberABtnClick - numberBBtnClick >= 2) {
		return game_AWin;
	} else if (playerAScore === 40 && playerBScore === 40 && numberBBtnClick - numberABtnClick >= 2) {
		return game_BWin;
	} else if (playerAScore === 40 && playerBScore === 40 && numberABtnClick - numberBBtnClick >= 1) {
		return advantage_A;
	} else if (playerAScore === 40 && playerBScore === 40 && numberBBtnClick - numberABtnClick >= 1) {
		return advantage_B;
	} else if (playerAScore === 40 && playerBScore === 40) {
		return deuce;
	} else if (numberABtnClick === 5 && numberBBtnClick <= 3) {
		return game_AWin;
	} else if (numberBBtnClick === 5 && numberABtnClick <= 3) {
		return game_BWin;
	}
}
