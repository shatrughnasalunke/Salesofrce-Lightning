({
    getAccountOverView : function(component) {
        var getCurrentRecordId = component.get("v.recordId");
        var action = component.get("c.showCompanyOverviewOnLightningComponent");
        action.setParams({accountIds : getCurrentRecordId});
        action.setCallback(this, function(response) {
            var state = response.getState();
            alert(state);
            if (state === "SUCCESS") {
                component.set("v.accountOverView", response.getReturnValue());
                console.log();
            }
            else {
                alert('insdie else');
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    } 
})