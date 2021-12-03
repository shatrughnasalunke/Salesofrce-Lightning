({
	fireEvent : function(component, event, helper) {
        alert('Event fire successfully');
        var getvent = $A.get("e.c:ApplicationEvent");
        getvent.setParams({
            "message" :  "Application event example" 
        });
        getvent.fire();
	}
})