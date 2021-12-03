({
    init : function(component, event, helper) {
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__isUrlAddressable',
            },
            state: {
                "c__id": "001XXXXXXXXXXXX"
            }
        };
        component.set("v.pageReference", pageReference);
     },
    handleClick: function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    }
})