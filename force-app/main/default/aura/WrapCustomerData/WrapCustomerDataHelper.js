({
	
    sendResponseToSourceOrg : function(component, event, helper) {
        
        alert(event.target.id);
        alert(event.target.firstname);
        alert(event.target.LastName);
        alert(event.target.Salutation);
        
        component.set("v.isOpen", true);
        component.set("v.reecordId",event.target.id);
        component.set("v.reecordId",event.target.FirstName);
        component.set("v.reecordId",event.target.LastName);
        component.set("v.reecordId",event.target.Salutation);
    
    },
    deleteAccountLightning : function(component, event, helper) {
        alert(event.target.id);
        var action = component.get('c.deleteRecordFromLightningOrg');
        var state;
        var parser;
        action.setParams({
            recordId : event.target.id
        })
        action.setCallback(this, function(response) {
            var state  =  response.getState();
            var result = response.getReturnValue();
            if (state === "SUCCESS") {
                if (result=="Success") {
                    alert('Record has been deleted successfully');
                    window.location.reload()
                }
                else {
                    
                }
            }
            else {
            }
     });
      
      $A.enqueueAction(action);
    }
})