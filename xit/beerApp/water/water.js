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
		init: function() {
            var self = this,
                opts = this.options;
            opts.water = new can.Map({
                visible: false,
                toggle: function() {

                    this.attr("visible", !this.attr("visible"));
                }
            });
			this.element.html(initView({ water: opts.water }));
		}
	});
});