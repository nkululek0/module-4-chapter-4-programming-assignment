const gradeSymbol = (mark) => {
	try {
		if(mark == null || typeof(mark) != "number") {
			throw "input must not be null / must be a number";
		}
		if(mark > 1.0 || mark < 0.0) {
			throw "out of range";
		}
	}
	catch(err) {
		return err;
	}
	if (mark >= 0.9 && mark <= 1.0) {
	 	return "A";
	} else if(mark >= 0.8) {
		return "B";
	} else if(mark >= 0.7) {
		return "C";
	} else if(mark >= 0.6) {
		return "D";
	} else if(mark < 0.6) {
		return "F"
	}
}