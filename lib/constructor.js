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

module.exports = metods;