({
	fetchData : function(component, event, helper) {
        alert('Init handler excuted successfully');
        var action = component.get("c.fetchRecords");
        action.setCallback(this, function(response){
            var state = response.getState();
            alert(state);
            if(state === "SUCCESS") {
                alert('success');
                console.log('Response',response.getReturnValue());
                alert('Response--->'+response.getReturnValue());
                component.set("v.listOfRecord",response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                    errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
	}
})