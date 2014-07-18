steal('can','./init.ejs', 'xit/models/wort.js',
function (can, initEJS, Wort) {
	/**
	 * @constructor xit/wort/list
	 * @alias WortList
	 * @parent xit
	 * @inherits can.Control
	 * Lists worts and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Wort: Wort
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a wort list, render it, and make a request for finding all worts.
		 */
		init: function () {
			this.list = new Wort.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Wort.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.wort').data('wort').destroy();
			}
		},
		/**
		 * Handler for wort creation.  Pushes to the list of instances.
		 */
		"{Wort} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});