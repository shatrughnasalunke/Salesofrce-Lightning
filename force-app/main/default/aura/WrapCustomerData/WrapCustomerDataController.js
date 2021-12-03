({
    loadData: function(component, event, helper) {
        
        var wrapperlistData = component.get("v.wrapperList");
        var action = component.get('c.getBankDetailsFromCustomerObject');
        var state;
        var parser;
        
        action.setCallback(this, function(response) {
        state = response.getState();
            if (state === "SUCCESS") {
                parser = JSON.parse(response.getReturnValue());
                console.log('parser--->'+parser);
                for (var i = 0; i < parser.length; i ++) {
                    console.log('parser values--->'+parser[i].NomineeUpdated);
                    wrapperlistData.push(parser[i]);
                }
                component.set("v.wrapperList",wrapperlistData);
            }
            else {
                console.log('Érror Occured-->'+response.getError());
            }
        });
        $A.enqueueAction(action);
    },
    editResponse  : function (Component,  event, helper) {
        helper.sendResponseToSourceOrg(Component, event, helper);
    },
    deleteRecord : function(component, event, helper) {
       if( confirm('Are you sure ? ') )
       helper.deleteAccountLightning(component, event, helper);
	},
})