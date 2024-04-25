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

	for (let i = 0; i < 1; i++) {
		if (start[0] === end[0]) {
			if (start[1] === end[1]) {
				console.log("finished");
			}
		}

		if (start[0] >= end[0]) {
			console.log("first yes");
		} else if (start[0] <= end[0]) {
			console.log("first no");
		}

		if (start[1] >= end[1]) {
			console.log("second no");
		} else if (start[1] <= end[1]) {
			console.log("second no");
		}
		console.log(start, end);
		console.log(start[0], end[0]);
		console.log(start[1], end[1]);
	}
}

function test() {
	knightMoves([0, 0], [1, 2]);
	/*knightMoves([0, 0], [3, 3]);
	knightMoves([3, 3], [0, 0]);
	knightMoves([0, 0], [7, 7]);
	knightMoves([0, 0], [7, 7]);
	knightMoves([3, 3], [4, 3]);*/
}

test();
