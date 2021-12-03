({
	doInit : function(component, event, helper) {
        var d= new Date();
        component.set('v.Today',d);
        
        helper.broadCastMessage(component, event, helper);
         var lWidth = window.innerWidth ;//Get the window's width
        //The setInterval() method calls a function or 
        //evaluates an expression at specified intervals (in milliseconds).
        window.setInterval($A.getCallback(function() { 
            helper.shiftDiv(component, event,lWidth);
        } ), 100);
	}
})