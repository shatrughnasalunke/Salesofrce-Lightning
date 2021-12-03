({
	fireEvent : function(component, event, helper) {
       
        alert('Child event fire');
        var  getEvent = component.getEvent("comEvent");
        var Id ="F123456";
        alert("Get Event --- >"+getEvent);
        getEvent.setParams({
            "FraudId" :  Id
        });
        getEvent.fire();
	}
})