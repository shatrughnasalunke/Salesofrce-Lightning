({
    closeModel: function(component, event, helper) {
        component.set("v.isOpen", false);
    },
    likenClose: function(component, event, helper) {
        
        alert('thanks for like Us :)');
        component.set("v.isOpen", false);
        var getLatestValue  = component.get("v.isOpen");
        alert(getLatestValue);
    },
})