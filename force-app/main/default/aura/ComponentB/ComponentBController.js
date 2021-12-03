({
	fireEvent : function(component, event, helper) {
        alert('Event fire');
         var appEvent = $A.get("e.shatrughna94:ApplicationEevent");
        appEvent.setparams({
            "message": "Pass values" 
        });
        appEvent.getEvent();
	}
})