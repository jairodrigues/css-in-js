import React from 'react';
import glamorous from 'glamorous';

const Box = glamorous.div(
	{
		maxWidth: '60%',
		margin: '1rem auto',
		padding: '2rem 3rem',
	},
	({ theme }) => ({
		background: theme.background,
		color: theme.color,
	})
);

const MyComponent = () => (
	<Box>
		<h1>A title inside a pink box! </h1>
	</Box>
);

export default MyComponent;
