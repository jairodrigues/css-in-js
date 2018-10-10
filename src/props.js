import React, { Component } from 'react';
import glamorous from 'glamorous';

// Props
const Box = glamorous.div(
	{
		marginTop: 30,
		padding: '2rem 3rem',
	},
	props => ({
		background: props.bg,
	})
);

// Media queries
const Box2 = glamorous.div({
	maxWidth: '60%',
	background: 'antiquewhite',
	margin: '2rem auto',
	padding: '2rem 3rem',
	'@media (max-width: 600px)': {
		maxWidth: '90%',
		background: 'lightseagreen',
	},
});

// pseudo-elements and pseudo-classes
const Box3 = glamorous.div({
	maxWidth: '60%',
	background: 'antiquewhite',
	margin: '1rem auto',
	padding: '2rem 3rem',
	transition: 'background .3s',
	':hover': {
		background: 'lightseagreen',
	},
	':before': {
		content: '"Hello"',
		background: 'pink',
		padding: '.5rem 1rem',
	},
});

const Props = () => (
	<section>
		<Box bg="purple">
			<h1>A title inside a purple box!</h1>
		</Box>
		<Box2 bg="purple">
			<h1>A title inside a purple box 2!</h1>
		</Box2>
		<Box3 bg="purple">
			<h1>A title inside a purple box 3!</h1>
		</Box3>
	</section>
);

export default Props;
