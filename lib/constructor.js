'use strict';

function metods() { }

metods.Verify = function (value1, value2) {
	if (value1 > value2) {
		return value1;
	} else if (value1 < value2) {
		return value2;
	} else {
		return value1;
	}
};

metods.Sequenc = function (param) {
	var element = 1;
	for (var index = 0; index < param; index++) {
		element = element * 2;
	}
	return element;
};
module.exports = metods;