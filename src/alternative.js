import React from 'react';
import { Div, H1 } from 'glamorous';

const MyComponent = () => (
	<Div
		background="antiquewhite"
		margin="2rem auto"
		padding="2rem 2rem"
		maxWidth="60%"
	>
		<H1 className="card-title" borderBottom="2px solid purple">
			A title inside an antique white box!
		</H1>
	</Div>
);

export default MyComponent;
