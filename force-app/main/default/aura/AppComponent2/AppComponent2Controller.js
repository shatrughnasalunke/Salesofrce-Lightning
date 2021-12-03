({
	handleEvent : function(component, event, helper) {
       var message = event.getParam("message");
		alert('In parent componentn evnt'+message);
	}
})