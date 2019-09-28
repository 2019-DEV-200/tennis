import styled from 'styled-components';
import CustomButton from '../common/CustomButton';

export const MainContainer = styled.div`
	max-width: 100%;
	align: center;
`;

export const PlayerA = styled(CustomButton)`
float: left;
`;

export const PlayerB = styled(CustomButton)`
float: right;
`;
