import React from 'react';
import { injectIntl } from 'react-intl';
import { MainTitle, MainTable, TableHead, TableColumn } from './common.Styled';

const ScoreBoardComponent = (props) => {
	const scoreBoard_Title = 'Match Score Board';
	const player_A = 'Player A';
	const Player_B = 'Player B';
	return (
		<React.Fragment>
			<MainTitle>{scoreBoard_Title}</MainTitle>
			<MainTable>
				<TableHead>{player_A}</TableHead>
				<TableHead>{Player_B}</TableHead>

				<tr>
					<TableColumn>{props.playerAScore}</TableColumn>
					<TableColumn>{props.playerBScore}</TableColumn>
				</tr>
			</MainTable>
		</React.Fragment>
	);
};

export default injectIntl(ScoreBoardComponent);
