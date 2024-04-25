import { Node, LinkedList } from "./nodeLinkedList.js";

function getRandomMove(max = 2) {
	return Math.floor(Math.random() * max);
}

function knightRecaller(start, end, times = 40) {
	let knight = new LinkedList();
	knight.append(start);

	knightListCreator(knight, end);
	let knight2 = knight;
	let time1;
	let time2;
	let time3;

	for (let i = 0; i < times; i++) {
		knight = new LinkedList();
		knight.append(start);

		knightListCreator(knight, end);

		if (knight2.find(end) >= knight.find(end)) {
			knight2 = knight;
			time1 = knight2.find(end);
		}
	}

	// For better rechecking if it took too many moves
	if (time1 >= 3) {
		let knight3 = knight2;

		for (let i = 0; i < times; i++) {
			knight = new LinkedList();
			knight.append(start);

			knightListCreator(knight, end);

			if (knight3.find(end) > time1) {
				knight3 = knight;
				time2 = knight3.find(end);
			}
		}

		if (time2 >= 4) {
			let knight4 = knight3;

			for (let i = 0; i < times * 3; i++) {
				knight = new LinkedList();
				knight.append(start);

				knightListCreator(knight, end);

				if (knight4.find(end) > time2) {
					knight4 = knight;
					time3 = knight4.find(end);
				}
			}

			// Should be false most of the times
			console.log(time3 < time2);
			return time3 < time2 ? knightDataDisplayer(knight4, end) : knightDataDisplayer(knight3, end);
		} else {
			return time2 < time1 ? knightDataDisplayer(knight3, end) : knightDataDisplayer(knight2, end);
		}
	} else {
		return knightDataDisplayer(knight2, end);
	}
}

function knightListCreator(knight, end) {
	//let moves = 0;

	while (!knight.contains(end) /* && moves <= 1000*/) {
		// Make a function for all of this

		// If 1, it will to 1 in any direction, and will add/reduce 2 to the left/right
		// If 2, otherwise
		let random2or1First = getRandomMove() + 1;
		//console.log("Depends on", random2or1First);

		if (random2or1First === 1) {
			// 1 in any direction

			if (knight.tail()[0] === 0) {
				if (getRandomMove()) {
					// 2 for Top but +- 1 or 1 Top but +- 2
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 6) {
							knight.append([knight.tail()[0] + 2, knight.tail()[1] + 1]);
						}
					} else {
						if (knight.tail()[1] >= 1 && knight.tail()[1] <= 6) {
							knight.append([knight.tail()[0] + 2, knight.tail()[1] - 1]);
						}
					}
				} else {
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 5) {
							knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
						}
					} else {
						if (knight.tail()[1] >= 2 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] + 1, knight.tail()[1] - 2]);
						}
					}
				}
			} else if (knight.tail()[0] >= 1 && knight.tail()[0] <= 6) {
				// 1 for Top, 0 for Bottom

				if (getRandomMove()) {
					// 1 for +2 Right, 0 for -2 Left
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 5) {
							knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
						}
					} else {
						if (knight.tail()[1] >= 2 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] + 1, knight.tail()[1] - 2]);
						}
					}
				} else {
					if (getRandomMove()) {
						if (getRandomMove()) {
							if (knight.tail()[1] >= 0 && knight.tail()[1] <= 5) {
								knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
							}
						} else {
							if (knight.tail()[1] >= 2 && knight.tail()[1] <= 7) {
								knight.append([knight.tail()[0] - 1, knight.tail()[1] - 2]);
							}
						}
					}
				}
			} else if (knight.tail()[0] === 7) {
				if (getRandomMove()) {
					if (knight.tail()[1] >= 0 && knight.tail()[1] <= 5) {
						knight.append([knight.tail()[0] - 1, knight.tail()[1] + 2]);
					}
				} else {
					if (knight.tail()[1] >= 2 && knight.tail()[1] <= 7) {
						knight.append([knight.tail()[0] - 1, knight.tail()[1] - 2]);
					}
				}
			} else if (knight.tail()[0] <= 0 || knight.tail()[0] >= 8) {
				// Should not happen with all the IF controlling on knight.tail()[0]
				console.log("How did we get here? 1");
			}
		} else if (random2or1First === 2) {
			// 2 in any direction

			if (knight.tail()[0] === 0) {
				if (getRandomMove()) {
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 6) {
							knight.append([knight.tail()[0] + 2, knight.tail()[1] + 1]);
						}
					} else {
						if (knight.tail()[1] >= 1 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] + 2, knight.tail()[1] - 1]);
						}
					}
				} else {
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 5) {
							knight.append([knight.tail()[0] + 1, knight.tail()[1] + 2]);
						}
					} else {
						if (knight.tail()[1] >= 2 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] + 1, knight.tail()[1] - 2]);
						}
					}
				}
			} else if (knight.tail()[0] >= 2 && knight.tail()[0] <= 5) {
				// 1 for any direction +, 0 for any direction -

				if (getRandomMove()) {
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 6) {
							knight.append([knight.tail()[0] + 2, knight.tail()[1] + 1]);
						}
					} else {
						if (knight.tail()[1] >= 1 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] + 2, knight.tail()[1] - 1]);
						}
					}
				} else {
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 6) {
							knight.append([knight.tail()[0] - 2, knight.tail()[1] + 1]);
						}
					} else {
						if (knight.tail()[1] >= 1 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] - 2, knight.tail()[1] - 1]);
						}
					}
				}
			} else if (knight.tail()[0] === 7) {
				if (getRandomMove()) {
					// 2 for Bottom but +- 1 or 1 bottom but +- 2
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 6) {
							knight.append([knight.tail()[0] - 2, knight.tail()[1] + 1]);
						}
					} else {
						if (knight.tail()[1] >= 1 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] - 2, knight.tail()[1] - 1]);
						}
					}
				} else {
					if (getRandomMove()) {
						if (knight.tail()[1] >= 0 && knight.tail()[1] <= 5) {
							knight.append([knight.tail()[0] - 1, knight.tail()[1] + 2]);
						}
					} else {
						if (knight.tail()[1] >= 2 && knight.tail()[1] <= 7) {
							knight.append([knight.tail()[0] - 1, knight.tail()[1] - 2]);
						}
					}
				}
			} else if (knight.tail()[0] <= 0 || knight.tail()[0] >= 8) {
				// Should not happen with all the IF controlling on knight.tail()[0]
				console.log("How did we get here? 2");
			}

			if (knight.tail()[1] <= -1 || knight.tail()[2] >= 8) {
				// Should not happen with all the IF controlling on knight.tail()[0]
				console.log("How did we get here? 3");
			}
		}

		//console.log("Tail", knight.tail()[0], knight.tail()[1]);
		//moves++;
	}

	//return moves;
}

function knightDataDisplayer(knight, end) {
	console.log();
	//console.log("Find out if", end, "exists:", knight.contains(end));
	//console.log("Location:", knight.find(end));
	console.log("You made it in", knight.find(end), "moves...");
	console.log("Here's your path:");
	console.log(knight.toString());
	console.log();
}

function knightMoves(start, end) {
	// Keeping to refer at
	/*let board = [
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
		[0, 1, 0, 1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 0],
	];*/

	knightRecaller(start, end);
}

/*
	Head of the list -> value: start

	nextNode of the list -> any valid node
	do this until the value is the same as end
*/

// 2 in any direction + 1 in left/right
// 1 in any direction + 2 in left/right

/*
	Make an function which calls for x times and gets/updates the best
	result from the x knightMoves() calls
*/

function test() {
	knightMoves([0, 0], [1, 2]);
	knightMoves([0, 0], [3, 3]);
	knightMoves([3, 3], [0, 0]);
	knightMoves([0, 0], [7, 7]);
	knightMoves([3, 3], [4, 3]);
}

test();
