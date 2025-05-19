'use strict';

const methods = {};

methods.verify = (value1, value2) => Math.max(value1, value2);

methods.sequence = (param) => 2 ** param;

module.exports = methods;