({
	fireEvent : function(component, event, helper) {
        alert('Child Component');
        var getEvent =  component.getEvent("cmpEvent");
        getEvent.setParams({
            "message" : "pass Value"
        });
        getEvent.fire();
	}
})