steal(
	'xit/hop/create',
	'xit/beer/create',
	'xit/malt/create',
	'xit/wort/create',
	'xit/gravity/create',
	'xit/yield/create',
    'xit/water/water.js',
    'xitlib/timer',

    'xit/malt/list',
    'xit/beer/list',
    'xit/wort/list',
    'xit/gravity/list',
//    'xit/hop/list',
	'xit/yield/list',
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
    new GravityCreate('#gravities');
    new YieldCreate('#yiels');
    new BeerCreate('#beers');

});