import React from 'react';
import Puzzle from './components/Puzzle';
import './style.css';

const App = () => (
	<>
		<Puzzle />

		<a
			className='made-by'
			href='https://github.com/interaminense/fifteen-puzzle-game'
			target='_blank'
			rel='noopener noreferrer'
		>
			Fork me on github . @interaminense
		</a>
	</>
);

export default App;
