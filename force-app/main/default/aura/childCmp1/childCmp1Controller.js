({
	fireEvent : function(component, event, helper) {
        alert('Event Fire');
        var  getEVent = component.getEvent("cmpEvent");
        getEVent.setParams({
            "accountIds" : "1234567"
        });
        getEVent.fire();
	}
})