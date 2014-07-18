steal('can','./init.ejs', 'xit/models/gravity.js',
function (can, initEJS, Gravity) {
	/**
	 * @constructor xit/gravity/list
	 * @alias GravityList
	 * @parent xit
	 * @inherits can.Control
	 * Lists gravities and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Gravity: Gravity
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a gravity list, render it, and make a request for finding all gravities.
		 */
		init: function () {
			this.list = new Gravity.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Gravity.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.gravity').data('gravity').destroy();
			}
		},
		/**
		 * Handler for gravity creation.  Pushes to the list of instances.
		 */
		"{Gravity} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});