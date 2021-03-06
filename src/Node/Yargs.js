/* global exports */
"use strict";

// module Node.Yargs

exports.yargs = function() {
    return require('yargs');
};

exports.setupWith = function(setup) {
    return function(y) {
        return function() {
            return setup(y);
        };
    };
};

exports.argv = function(y) {
    return function() {
        return y.argv;
    };
}
