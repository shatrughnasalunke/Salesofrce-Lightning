({
	fireComponentEvent : function(component, event, helper) {
        var accountId ="0012v00003FHiVEAA1";// component.get("v.recordId");
        alert('AccountId Is --->'+accountId);
        var getevent  = component.getEvent("eventRegisterName");
        getevent.setParams({
             accountRecordId : accountId
        });
        alert('inside child component');
        var fireorNot = getevent.fire();
        alert('Fire ? ' +fireorNot);
       
	}
})