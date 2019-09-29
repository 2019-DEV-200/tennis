import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { scoreBoard_Title, player_A, player_B } from '../constant/scoreBoard.constant';
import { MainTitle, MainTable, TableHead, TableColumn } from './common.Styled';

const ScoreBoardComponent = (props) => {
	console.log('B value is', props.playerBScore);
	return (
		<React.Fragment>
			<MainTitle>{props.intl.formatMessage({ id: scoreBoard_Title })}</MainTitle>
			<MainTable>
				<tr>
					<TableHead>{props.intl.formatMessage({ id: player_A })}</TableHead>
					<TableHead>{props.intl.formatMessage({ id: player_B })}</TableHead>
				</tr>
				<tr>
					<TableColumn>{props.playerAScore}</TableColumn>
					<TableColumn>{props.playerBScore}</TableColumn>
				</tr>
			</MainTable>
		</React.Fragment>
	);
};

export default injectIntl(ScoreBoardComponent);
