steal('can', 'resume/models/experience.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Experience, initEJS) {

	/**
	 * @constructor resume/experience/create
	 * @alias ExperienceCreate
	 * @parent resume
	 * @inherits can.Control
	 * Creates experiences
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(initEJS());
		},
		/**
		 *  Submit handler. Create a new experience from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Experience(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});