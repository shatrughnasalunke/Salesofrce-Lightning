({
    getContactList: function(component, pageNumber, pageSize) {
        var action = component.get("c.getContactData");
        var getObjectType = component.get("v.sObjectName");
        alert('getObjectType--->'+getObjectType);
        action.setParams({
            "pageNumber": pageNumber,
            "pageSize": pageSize,
            "getName" : getObjectType
        });
        action.setCallback(this, function(result) {
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                var resultData = result.getReturnValue();
                component.set("v.ContactList", resultData.contactList);
                component.set("v.PageNumber", resultData.pageNumber);
                component.set("v.TotalRecords", resultData.totalRecords);
                component.set("v.RecordStart", resultData.recordStart);
                component.set("v.RecordEnd", resultData.recordEnd);
                component.set("v.TotalPages", Math.ceil(resultData.totalRecords / pageSize));
            }
        });
        $A.enqueueAction(action);
    }
})