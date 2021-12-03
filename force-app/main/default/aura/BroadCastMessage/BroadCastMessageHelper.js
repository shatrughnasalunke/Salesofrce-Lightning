({
    broadCastMessage: function (component, event, helper) {
        var action = component.get("c.broadCaseMessage");
        action.setCallback(this, function(response){
            var state = response.getState();
            alert('get state-->'+state);
            if(state == 'SUCCESS') {
                component.set('v.broadCastMessage', response.getReturnValue());
            }
            if (state == 'ERROR') {
                var errors = response.getError();
                console.log('Get Error Meesage-->'+errors[0].message);
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert(errors[0].message );
                    }
                }
            }  
            });
            $A.enqueueAction(action);
    },
     shiftDiv: function(component, event,lWidth) {
        var changeposition = component.get("v.intervalId");
        var floatElement = document.getElementById('tofloat');	  
        if(changeposition < lWidth){
            floatElement.style.left = changeposition+'px';
            changeposition = changeposition + 5;
            component.set("v.intervalId",changeposition);
        }
        //reset the left to 0
        else{
            component.set("v.intervalId",0);
            floatElement.style.left = "0px";
            changeposition = component.get("v.intervalId");//resetting so as to hit the if block again
        }
    }
 });