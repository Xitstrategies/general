steal('can','./init.ejs', 'xit/models/malt.js',
function (can, initEJS, Malt) {
	/**
	 * @constructor xit/malt/list
	 * @alias MaltList
	 * @parent xit
	 * @inherits can.Control
	 * Lists malts and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Malt: Malt
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a malt list, render it, and make a request for finding all malts.
		 */
		init: function () {
			this.list = new Malt.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Malt.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.malt').data('malt').destroy();
			}
		},
		/**
		 * Handler for malt creation.  Pushes to the list of instances.
		 */
		"{Malt} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});