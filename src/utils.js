export const compareArr = (arr1, arr2) => {
	let areEquals = false;

	arr1.forEach(e1 =>
		arr2.forEach(e2 => {
			if (e1.length > 1 && e2.length) {
				areEquals = compareArr(e1, e2);
			} else if (e1 !== e2) {
				areEquals = false;
			} else {
				areEquals = true;
			}
		})
	);

	return areEquals;
};

export const getColumnBelowPosition = (arr, i) =>
	arr.find(pos => pos === i + 1);

export const getSides = i => [i - 4, i + 1, i + 4, i - 1];

export const cloneArr = board => board.slice(0);

export const getEmptyPosition = (arr, sides) =>
	sides.find(side => arr[side] === -1);

export const shuffleArr = array => {
	let i = array.length;
	let j = 0;
	let temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
};

// export const shuffleArr = arr => {
// 	let currentIndex = arr.length
// 	let temporaryValue;
// 	let randomIndex;

// 	// While there remain elements to shuffle...
// 	while (0 !== currentIndex) {

// 		// Pick a remaining element...
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		// And swap it with the current element.
// 		temporaryValue = arr[currentIndex];
// 		arr[currentIndex] = arr[randomIndex];
// 		arr[randomIndex] = temporaryValue;
// 	}

// 	return arr;
// }
