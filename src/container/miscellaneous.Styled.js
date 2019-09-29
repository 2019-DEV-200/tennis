import styled from 'styled-components';
import CustomButton from '../common/CustomButton';

export const MainContainer = styled.div`text-align: center;`;

export const PlayerA = styled(CustomButton)`
float: left;
margin-left: 30%;
 @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const PlayerB = styled(CustomButton)`
float: right;
margin-right: 30%;
 @media (max-width: 600px) {
    margin-right: 0px;
  }
`;
