import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import MiscellaneousContainer from '../src/container/MiscellaneousContainer';

ReactDOM.render(
	<IntlProvider locale="en">
		<MiscellaneousContainer />
	</IntlProvider>,
	document.getElementById('root')
);
