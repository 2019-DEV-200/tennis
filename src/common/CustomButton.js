import React, { Component } from 'react';
import CustomButton from './CustomButton.Styled';

export default class Button extends Component {
	// rendering button component
	render() {
		const { children, label } = this.props;
		return (
			<CustomButton {...this.props}>
				<span>{label}</span>
				{children}
			</CustomButton>
		);
	}
}
