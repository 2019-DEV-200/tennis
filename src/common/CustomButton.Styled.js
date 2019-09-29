import styled from 'styled-components';
import { em } from 'polished';
import { FontFamily } from './Fonts';

// Styling to the button
const btnStyle = (backgroundColor, border, color) => `
background-color: ${backgroundColor};
color: ${color};
cursor: pointer;
`;

// Custom Button
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
