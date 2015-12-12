'use strict';
var util = require('util');
const phi = 1.618;
module.exports = function (nums) {
	if (nums.y && util.isNumber(nums.y)) {
		return {x: nums.y / phi, y: nums.y};
	} else if (nums.x && util.isNumber(nums.x)) {
		return {y: nums.x * phi, x: nums.x};
	}
	throw new Error('Missing expected input');
};
