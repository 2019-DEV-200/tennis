import styled, { css } from 'styled-components';
import { em } from 'polished';
import { FontFamily } from '../common/Fonts';

export const Wrapper = styled.div`max-width: 100;`;

export const MainTitle = styled.h1`
	${FontFamily.RegularFont};
	margin-top: 40px;
	algin: center;
`;

export const TableWrapper = styled.div`algin: center;`;

export const MainTable = styled.table`
border-collapse: collapse;
border: 1px solid black;
display: inline-table;
}
`;

export const TableHead = styled.th`
	${FontFamily.RegularFont};
	border: 1px solid black;
`;

export const TableColumn = styled.td`
	${FontFamily.BoldFont};
	font-size: 1.25em;
	border: 1px solid black;
`;

export const UpdateBannerDiv = styled.div`text-align: center;`;

export const UpdateBannerText = styled.span`
	${FontFamily.BoldFont};
	font-size: 1.25em;
`;
