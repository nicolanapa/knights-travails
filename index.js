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
	while (/*!knight.contains(end)*/ i !== 50) {
		// Make a function for all of this
		i++;
		let randomValue1 = getRandomMove() + 1;
		let randomValue2 = getRandomMove() + 1;
		// If 1, it will to 1 in any direction, and will add/reduce 2 to the left/right
		// If 2, otherwise
		let random2or1First = getRandomMove() + 1;
		console.log("Depends on", random2or1First);

		if (random2or1First === 1) {
			// 1 in any direction

			if (knight.tail()[0] === 0) {
				if (getRandomMove()) {
					// 2 for Top but +- 1 or 1 Top but +- 2
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 2, knight.tail()[1] + 1]);
					} else {
						knight.append([knight.tail()[0] + 2, knight.tail()[1] - 1]);
					}
				} else {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
					} else {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] - 2]);
					}
				}

				knight.append([knight.tail()[0] + 1, knight.tail()[1] + getRandomMove()]);
			} else if (knight.tail()[0] >= 1 && knight.tail()[0] <= 6) {
				// 1 for Top, 0 for Bottom

				if (getRandomMove()) {
					// 1 for +2 Right, 0 for -2 Left
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
					} else {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] - 2]);
					}
				} else {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
					} else {
						knight.append([knight.tail()[0] - 1, knight.tail()[1] - 2]);
					}
				}
			} else if (knight.tail()[0] === 7) {
				if (getRandomMove()) {
					knight.append([knight.tail()[0] - 1, knight.tail()[1] + 2]);
				} else {
					knight.append([knight.tail()[0] - 1, knight.tail()[1] - 2]);
				}
			} else if (knight.tail()[0] <= 0 || knight.tail()[0] >= 8) {
				// Should not happen with all the IF controlling on knight.tail()[0]
				console.log("How did we get here?");
			}
		} else if (random2or1First === 2) {
			// 2 in any direction

			if (knight.tail()[0] === 0) {
				if (getRandomMove()) {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 2, knight.tail()[1] + 1]);
					} else {
						knight.append([knight.tail()[0] + 2, knight.tail()[1] - 1]);
					}
				} else {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
					} else {
						knight.append([knight.tail()[0] + 1, knight.tail()[1] - 2]);
					}
				}
			} else if (knight.tail()[0] >= 2 && knight.tail()[0] <= 5) {
				// 1 for any direction +, 0 for any direction -

				if (getRandomMove()) {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] + 2, knight.tail()[1] + 1]);
					} else {
						knight.append([knight.tail()[0] + 2, knight.tail()[1] - 1]);
					}
				} else {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] - 2, knight.tail()[1] + 1]);
					} else {
						knight.append([knight.tail()[0] - 2, knight.tail()[1] - 1]);
					}
				}
			} else if (knight.tail()[0] === 7) {
				if (getRandomMove()) {
					// 2 for Bottom but +- 1 or 1 bottom but +- 2
					if (getRandomMove()) {
						knight.append([knight.tail()[0] - 2, knight.tail()[1] + 1]);
					} else {
						knight.append([knight.tail()[0] - 2, knight.tail()[1] - 1]);
					}
				} else {
					if (getRandomMove()) {
						knight.append([knight.tail()[0] - 1, knight.tail()[1] + 2]);
					} else {
						knight.append([knight.tail()[0] - 1, knight.tail()[1] - 2]);
					}
				}
			} else if (knight.tail()[0] <= 0 || knight.tail()[0] >= 8) {
				// Should not happen with all the IF controlling on knight.tail()[0]
				console.log("How did we get here?");
			}
		}

		console.log("Tail", knight.tail()[0], knight.tail()[1]);
	}

	console.log("Moves", i);
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
