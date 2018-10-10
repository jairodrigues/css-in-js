import React from 'react';

// import Test from './basic';
// import Props from './props';
// import Alternative from './alternative';
import { css } from 'glamor';
import Theme from './theming';

// CSS GLOBAL
css.global('html, body', {
	background: 'green',
	margin: 0,
});

const App = () => (
	<div>
		<header>
			{/* <Test /> */}
			{/* <Props /> */}
			{/* <Alternative /> */}
			<Theme />
		</header>
	</div>
);

export default App;
