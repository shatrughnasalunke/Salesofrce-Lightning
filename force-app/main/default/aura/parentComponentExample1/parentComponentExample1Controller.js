({
	getPassword : function(component, event, helper) {
        var getPassword = event.getParam("passvalue");
		alert("password is-->"+getPassword);
        var myPassword  = component.set("v.getpassword",getPassword);
        alert("myPassword-->"+myPassword);
	}
})