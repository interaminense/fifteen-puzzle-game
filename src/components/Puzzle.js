import React, {useState} from 'react';
import './style.css';
import {
	shuffleArr,
	compareArr,
	cloneArr,
	getSides,
	getEmptyPosition,
	getColumnBelowPosition
} from '../utils';
import {CORRECT_ARR, LEFT_COLUMNS_ARR} from '../constants';

const Puzzle = () => {
	const [board, setBoard] = useState(shuffleArr(cloneArr(CORRECT_ARR)));
	const [finish, setFinish] = useState(compareArr(board, CORRECT_ARR));

	let [moves, setMoves] = useState(0);

	const handleRestart = () => {
		const newBoard = shuffleArr(cloneArr(CORRECT_ARR));

		//set new board
		setBoard(newBoard);

		//set moves to zero
		setMoves(0);

		//set finish to false
		setFinish(false);
	};

	const handleUpdateBoard = (currentPos, item) => {
		//clone board
		const newBoard = cloneArr(board);

		//sides [top, right, bottom, left]
		const sides = getSides(currentPos);

		//find empty position
		const emptyPos = getEmptyPosition(board, sides);

		//search if the next item is in the column below
		const columnBelow = getColumnBelowPosition(
			LEFT_COLUMNS_ARR,
			currentPos
		);

		if (board[emptyPos] === -1 && board[columnBelow] !== -1) {
			newBoard.splice(emptyPos, 1, item);
			newBoard.splice(currentPos, 1, -1);

			//set one more click
			setMoves(moves + 1);
		}

		//set new board
		setBoard(newBoard);

		//set finish if arrays are equals
		setFinish(compareArr(newBoard, CORRECT_ARR));
	};

	return (
		<div className='game'>
			<div className='board'>
				{board.map((item, i) => {
					const classNameEmpty = item > 0 ? '' : 'empty';
					const classNameStatus =
						item === i + 1 ? 'correct' : 'error';

					return (
						<button
							className={`button ${classNameEmpty} ${classNameStatus}`}
							disabled={item === -1 && true}
							onClick={() => handleUpdateBoard(i, item)}
							key={i}
						>
							{item > 0 ? item : ''}
						</button>
					);
				})}
			</div>

			<div className='status'>
				<div>moves: {moves}</div>

				{finish && (
					<div className='finish'>
						<div>finished!</div>

						<button
							className='button'
							onClick={() => handleRestart()}
						>
							restart
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Puzzle;
