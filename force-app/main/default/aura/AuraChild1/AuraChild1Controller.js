({
    fireComponentEvent : function(cmp, event) {
 		debugger;
        
        alert('Event fire successfully');
        var cmpEvent = cmp.getEvent("cmpEvent");
        alert('Second Alert fire Successfully');
      
        cmpEvent.setParams({
            "message" : "A component event fired me. " +
            "It all happened so fast. Now, I'm here!" });
        cmpEvent.fire();
    }
})