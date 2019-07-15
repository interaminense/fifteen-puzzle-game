export const compareArr = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
};

export const getColumnBelowPosition = (arr, i) =>
	arr.find(pos => pos === i + 1);

export const getColumnAbovePosition = (arr, i) =>
	arr.find(pos => pos === i - 1);

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
