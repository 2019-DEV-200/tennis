export function gameStatusValuated(playerAScore, playerBScore, numberABtnClick, numberBBtnClick) {
	console.log('number');
	if (numberABtnClick === 1 && numberBBtnClick === 1) {
		return 'gameStart';
	} else if (playerAScore === 40 && playerBScore === 40 && numberABtnClick >= 6 && numberBBtnClick === 4) {
		return 'game_AWin';
	} else if (playerAScore === 40 && playerBScore === 40 && numberABtnClick == 4 && numberBBtnClick >= 6) {
		return 'game_BWin';
	} else if (playerAScore === 40 && playerBScore === 40) {
		return 'deuce';
	} else if (numberABtnClick === 4 && numberBBtnClick < 3) {
		return 'game_AWin';
	} else if (numberBBtnClick === 4 && numberABtnClick < 3) {
		return 'game_BWin';
	}
}
