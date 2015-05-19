'use strict';

function metods() { }

metods.Verify = function (value1, value2) {
	
	if (!value1 > value2) {
		console.log(value1, value2)
		return value1;
	} else if (value1 < value2) {
		return value2;
	} else if (value1 === value2) {
		return 'values are equals';
	}

};

module.exports = metods;