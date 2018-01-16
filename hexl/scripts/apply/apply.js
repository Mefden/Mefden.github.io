const apply = (times, fn, value) => {
	const iter = (counter, acc) => {
		if (counter === 0) {
			return acc;
		}
		return iter(counter - 1, fn(acc));
	};

	return iter(times, value);
};