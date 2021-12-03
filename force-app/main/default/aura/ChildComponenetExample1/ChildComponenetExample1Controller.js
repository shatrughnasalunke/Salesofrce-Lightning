({
	fireComponentEvent : function(cmp, event) {
        var cmpEvent = cmp.getEvent("cmpevent1");
        cmpEvent.setParams({
            "passvalue" : "A component event fired me. " +
            "It all happened so fast. Now, I'm here!" });
        cmpEvent.fire();
    }
})