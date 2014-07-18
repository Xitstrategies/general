steal('can','./init.ejs', 'xit/models/beer.js',
function (can, initEJS, Beer) {
	/**
	 * @constructor xit/beer/list
	 * @alias BeerList
	 * @parent xit
	 * @inherits can.Control
	 * Lists beers and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Beer: Beer
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a beer list, render it, and make a request for finding all beers.
		 */
		init: function () {
			this.list = new Beer.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Beer.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.beer').data('beer').destroy();
			}
		},
		/**
		 * Handler for beer creation.  Pushes to the list of instances.
		 */
		"{Beer} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});