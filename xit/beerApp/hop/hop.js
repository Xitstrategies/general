steal('can', 'xit/models/hop.js', './init.mustache', 'jquery/dom/form_params', './hop.less',
	function (can, Hop, initView) {

	/**
	 * @constructor xit/hop
	 * @alias Hop
	 * @parent xit
	 * @inherits can.Control
	 * Creates hops
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
            opts.hop = new can.Map({
                visible: false,
                toggle: function() {
                    this.attr("visible", !this.attr("visible"));
                }
            });
            this.element.html(initView({ hop: opts.hop }));
		},
		/**
		 *  Submit handler. Create a new hop from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...');
			new Hop(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset();
			});
		}
	});
});