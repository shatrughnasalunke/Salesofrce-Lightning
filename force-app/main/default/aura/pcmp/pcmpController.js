({
	handleComponentEvent : function(component, event, helper) {
        var getparam = event.getParam("FraudId");
        alert("getparam-->"+getparam);
        console.log("getParam-->"+getparam);
        component.set("v.fraudId", getparam);
	}
})