steal(
	'xit/warehouseApp/something',

    'xitlib/timer',

	'./models/fixtures/fixtures.js',

    '../css/bootstrap.min.css',
    '../css/bootstrap.min.js',
    './xit.less',
    '../css/main.less',
function(Something, Clock){

    //Start loading functions
    new Clock('#time');
    new Something("#something");

});