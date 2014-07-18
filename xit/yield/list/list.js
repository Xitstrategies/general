steal('can','./init.ejs', 'xit/models/yield.js',
function (can, initEJS, Yield) {
	/**
	 * @constructor xit/yield/list
	 * @alias YieldList
	 * @parent xit
	 * @inherits can.Control
	 * Lists yields and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Yield: Yield
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a yield list, render it, and make a request for finding all yields.
		 */
		init: function () {
			this.list = new Yield.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Yield.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.yield').data('yield').destroy();
			}
		},
		/**
		 * Handler for yield creation.  Pushes to the list of instances.
		 */
		"{Yield} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});