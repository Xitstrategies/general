steal('can','./init.ejs', 'resume/models/experience.js',
function (can, initEJS, Experience) {
	/**
	 * @constructor resume/experience/list
	 * @alias ExperienceList
	 * @parent resume
	 * @inherits can.Control
	 * Lists experiences and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Experience: Experience
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a experience list, render it, and make a request for finding all experiences.
		 */
		init: function () {
			this.list = new Experience.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Experience.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.experience').data('experience').destroy();
			}
		},
		/**
		 * Handler for experience creation.  Pushes to the list of instances.
		 */
		"{Experience} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});