steal(
	'xit/beerApp/hop',
	'xit/beerApp/beer',
	'xit/beerApp/malt',
	'xit/beerApp/wort',
	'xit/beerApp/gravity',
	'xit/beerApp/yield',
    'xit/beerApp/water',
    'xitlib/timer',

	'./models/fixtures/fixtures.js',
//    '../css/icons/water.png',
//    '../css/icons/hops.png',
    '../css/bootstrap.min.css',
    '../css/bootstrap.min.js',
    './xit.less',
    '../css/main.less',
function(HopCreate, BeerCreate, MaltCreate, WortCreate, GravityCreate, YieldCreate, Water, Timer){

    //Start loading functions
    new Timer('#timer');
    new MaltCreate("#malts");
    new Water("#waters");
    new HopCreate('#hops');
    new WortCreate('#worts');
//    new GravityCreate('#gravities');
//    new YieldCreate('#yiels');
//    new BeerCreate('#beers');

});