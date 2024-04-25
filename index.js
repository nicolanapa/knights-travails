import { Node, LinkedList } from "./nodeLinkedList.js";

function getRandomMove(max = 2) {
	return Math.floor(Math.random() * max);
}

function knightMoves(start, end) {
	// Data structure with all nodes linked?
	// Use linked lists?
	let board = [
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
	];

	/*for (let i = 0; i < 1; i++) {
		if (start[0] === end[0]) {
			if (start[1] === end[1]) {
				console.log("finished");
			}
		}
	}*/

	let knight = new LinkedList();
	knight.append(start);

	/*if (start[0] === 0) {
		knight.append([2, 1]);
	} else if (start[0] > 0 && start[0] < 7) {
	} else if (start[0] === 7) {
	}*/

	let i = 0;
	while (/*!knight.contains(end)*/ i !== 10) {
		setTimeout(() => "", 3000);
		i++;
		let randomValue1 = getRandomMove() + 1;
		let randomValue2 = getRandomMove() + 1;
		// If 1, it will to 1 in any direction, and will add/reduce 2 to the left/right
		// If 2, otherwise
		let random2or1First = getRandomMove() + 1;
		console.log("Depends on", random2or1First);

		if (random2or1First === 1) {
			if (knight.tail()[0] === 0) {
				knight.append([knight.tail()[0] + 1, knight.tail()[1] + getRandomMove()]);
			} else if (knight.tail()[0] > 0 && knight.tail()[0] < 7) {
				knight.append([knight.tail()[0] + 1, knight.tail()[1] + getRandomMove()]);
			} else if (knight.tail()[0] === 7) {
				knight.append([knight.tail()[0] - 1, knight.tail()[1] - getRandomMove()]);
			}
		} else if (random2or1First === 2) {
			if (knight.tail()[0] === 0) {
				knight.append([knight.tail()[0] + 2, knight.tail()[1] + getRandomMove()]);
			} else if (knight.tail()[0] > 0 && knight.tail()[0] < 7) {
				knight.append([knight.tail()[0] + 2, knight.tail()[1] + getRandomMove()]);
			} else if (knight.tail()[0] === 7) {
				knight.append([knight.tail()[0] - 2, knight.tail()[1] - getRandomMove()]);
			}
		}

		console.log("Tail", knight.tail()[0], knight.tail()[1]);
		
	}

	console.log();
	console.log(knight.toString());
}

/*
	Head of the list -> value: start

	nextNode of the list -> any valid node
	do this until the value is the same as end
*/

// 2 in any direction + 1 in left/right
// 1 in any direction + 2 in left/right

function test() {
	knightMoves([0, 0], [1, 2]);
	/*knightMoves([0, 0], [3, 3]);
	knightMoves([3, 3], [0, 0]);
	knightMoves([0, 0], [7, 7]);
	knightMoves([0, 0], [7, 7]);
	knightMoves([3, 3], [4, 3]);*/
}

test();
