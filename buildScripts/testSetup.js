//Register babel to transpile first

require('babel-register')();

//Disable webpack features that Mocha does'nt understand
require.extensions['.css'] = function() {}; 