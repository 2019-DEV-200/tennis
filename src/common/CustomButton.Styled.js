import styled from 'styled-components';
import { em } from 'polished';
import { FontFamily } from './Fonts';

const btnStyle = (backgroundColor, border, color) => `
background-color: ${backgroundColor};
color: ${color};
cursor: pointer;
`;

const CustomButton = styled.button`
	text-align: center;
	font-size: ${em(16)};
	${FontFamily.RegularFont};
	text-decoration: none;
	padding: 15px 20px;
	&:focus {
		outline: none;
	}
	&.redBtn {
		${btnStyle('#AF000D', '#AF000D', '#FFF')} &:hover, &:focus {
			${btnStyle('#AF000D', '#AF000D', '#FFF')};
		}
		&:active {
			background-color: #b6b7b6;
		}
	}
	&.slateBtn {
		${btnStyle('#4D6474', '#fff', '#fff')} &:hover, &:focus {
			${btnStyle('#3E505D', '#fff', '#fff')};
			outline: none !important;
		}
		&:active {
			background-color: #b6b7b6;
			outline: none !important;
		}
	}
	&.blackBtn {
		${btnStyle('#000', '#000', '#fff')} &:hover, &:focus {
			${btnStyle('#000', '#000', '#fff')};
			outline: none !important;
		}
		&:active {
			background-color: #004f4b;
			outline: none !important;
		}
	}
	&.greenBtn {
		${btnStyle('#008580', '#fff', '#fff')} &:hover, &:focus {
			${btnStyle('#00716C', '#fff', '#fff')};
			outline: none !important;
		}
		&:active {
			background-color: #004f4b;
			outline: none !important;
		}

		${(props) =>
			props.disabled &&
			`
    background: none repeat scroll 0 0;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    color: #ccc;
    border: 1px solid #ccc;    
    `};
	}
`;

export default CustomButton;
