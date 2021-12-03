({
	fireEvent : function(component, event, helper) {
        var getEvent  =  $A.get("e.c:appEvent1");
        alert(getEvent);
        getEvent.setParams({
            "message" : "Pass Values"
        });
        getEvent.fire();
	}
})