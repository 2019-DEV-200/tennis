import React from 'react';
import { scoreBoard_Title, player_A, player_B } from '../constant/scoreBoard.constant';
import { MainTitle, MainTable, TableHead, TableColumn } from './common.Styled';

// Functional component used to show results in UI
const ScoreBoardComponent = (props) => {
	return (
		<React.Fragment>
			<MainTitle>{scoreBoard_Title}</MainTitle>
			<MainTable>
				<tbody>
					<tr>
						<TableHead>{player_A}</TableHead>
						<TableHead>{player_B}</TableHead>
					</tr>
					<tr>
						<TableColumn>{props.playerAScore}</TableColumn>
						<TableColumn>{props.playerBScore}</TableColumn>
					</tr>
				</tbody>
			</MainTable>
		</React.Fragment>
	);
};

export default ScoreBoardComponent;
