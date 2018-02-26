import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

// BEGIN (write your solution here)
const quadrant = (point) => {
	const pointX = getX(point);
	const pointY = getY(point);
	if (pointX == 0 || pointY == 0) {
		return null;
	} else {
		if (pointX > 0 && pointY > 0) {
			return 1;
		}
		if (pointX < 0 && pointY > 0) {
			return 2;
		}
		if (pointX < 0 && pointY < 0) {
			return 3;
		}
		if (pointX > 0 && pointY < 0) {
			return 4;
		}
	}
}

const symmetricalPoint = (point) => makePoint((getX(point) < 0)? -(getX(point)) : -(getX(point)),(getY(point) < 0) ? -(getY(point)): -getY(point));


const distance = (point1, point2) =>  {
	let val1 = getX(point2) - getX(point1);
	val1 = val1 * val1;
	let val2 = getY(point2) - getY(point1);
	val2 = val2 * val2;
	return Math.sqrt(val1 + val2);
}
export {quadrant, symmetricalPoint, distance}
// END
