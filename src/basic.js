import React from 'react';
import glamorous from 'glamorous';

const Box = glamorous.div({
	background: 'pink',
	marginTop: 30, // defaults to pixels
	padding: '2rem 3rem',
});

const Test = () => (
	<Box>
		<h1> A title inside a pink box! </h1>
	</Box>
);

export default Test;
