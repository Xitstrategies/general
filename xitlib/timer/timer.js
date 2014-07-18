steal('can','./init.mustache', function(can, initView){
    /**
     * @class xitlib/timer
	 * @alias Timer   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			this.element.html(initView({}));
		},
        "start click": function() {
            this.updateClock();
        },
        "updateClock": function () {
        var currentTime = new Date (),
            currentHours = currentTime.getHours(),
            currentMinutes = currentTime.getMinutes(),
            currentSeconds = currentTime.getSeconds(),
            timeOfDay,
            currentTimeString;

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

        // Choose either "AM" or "PM" as appropriate
        timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

        // Convert an hours component of "0" to "12"
        currentHours = ( currentHours == 0 ) ? 12 : currentHours;

        // Compose the string for display
        currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

        // Update the time display
        document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    }

	});
});