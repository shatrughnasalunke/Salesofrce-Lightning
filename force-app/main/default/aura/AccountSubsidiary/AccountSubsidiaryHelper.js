({
    getSubsidiary : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'linkName', type: 'url',
            typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
            {label: 'Website', fieldName: 'Website', type: 'url'},
            {label: 'Company Type', fieldName: 'shatrughna94__CompanyType__c', type: 'Picklist'},
            {label: 'Active', fieldName: 'shatrughna94__Active__c', type: 'Checkbox'}
        ]);
        
        var action = component.get("c.getSubsidiary");
       	action.setParams({ currentAccountId : component.get("v.recordId") });        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var records =response.getReturnValue();
                records.forEach(function(record){
                    record.linkName = '/'+record.Id;
                });
                component.set("v.subsidiary", records);
            }
        });
        $A.enqueueAction(action);
    }
})