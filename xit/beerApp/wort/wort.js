steal('can', 'xit/models/wort.js', './init.mustache', 'jquery/dom/form_params',
	function (can, Wort, initView) {

	/**
	 * @constructor xit/wort/create
	 * @alias WortCreate
	 * @parent xit
	 * @inherits can.Control
	 * Creates worts
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
            var self = this,
                opts = this.options;
            opts.wort = new can.Map({
                visible: false,
                toggle: function() {
                    this.attr("visible", !this.attr("visible"));
                }
            });
            this.element.html(initView({ wort: opts.wort }));
		},
		/**
		 *  Submit handler. Create a new wort from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...');
			new Wort(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset();
			});
		}
	});
});