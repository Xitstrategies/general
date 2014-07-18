steal('can','./init.mustache', './water.less',
    function(can, initView){
    /**
     * @class xit/water
	 * @alias Water   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
            var self = this,
                opts = this.options;
            opts.water = new can.Map({
                visible: false,
                toggle: function() {
                    this.attr("visible", !this.attr("visible"));
                }
            });
			this.element.html(initView({ water: opts.water }));
		},
        /**
         *  Submit handler. Create a new water from the form.
         */
        submit: function (el, ev) {
        ev.preventDefault();
        el.find('[type=submit]').val('Creating...');
        new Water(el.formParams()).save(function() {
            el.find('[type=submit]').val('Create');
            el[0].reset();
        });
        },
	});
});