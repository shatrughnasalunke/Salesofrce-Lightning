({
    handleRecordUpdate: function(component, event, helper) {
        
        var accountFields = component.get("v.accFields");
       
        console.log('accFields--->'+accountFields);
        for (let i = 0 ;i<accountFields.length; i++) {
            console.log('Account Fields--->'+accountFields[i].Name);
        }
        
        var workspaceAPI = component.find("workspace");
        
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.setTabLabel({
                tabId: focusedTabId,
                label: accountFields.Type + ' - ' + accountFields.Name
            });
        })
    }
})