({
    doInit : function(component, event, helper) {
        var action = component.get('c.getPickList');
        action.setParams({
            objName : component.get('v.objName'),
            fldName : component.get('v.fldName')
        });
        action.setCallback(this,function(result){
            var resultValue = result.getReturnValue();
            component.set('v.ratingList',resultValue);
        });
        $A.enqueueAction(action);
        var actionLeaveType = component.get('c.getLevaeType');
        actionLeaveType.setParams({
            objName : component.get('v.objName'),
            leaveType : component.get('v.leaveType')
        });
        actionLeaveType.setCallback(this,function(result){
            var resultValue = result.getReturnValue();
            component.set('v.leaveTypeList',resultValue);
        });
        $A.enqueueAction(actionLeaveType);
        var leaveBalance = component.get('c.getLeaveBalance');
        var recordId=component.get('v.recordId');
        leaveBalance.setParams({
            userId : component.get('v.recordId')
        });
        leaveBalance.setCallback(this,function(result){
            var state = result.getState();
            // alert(state);
            var resultValue = result.getReturnValue();
            for(let i = 0 ; i<resultValue.length; i ++) {
                //  console.log('Manager Name--->'+resultValue[i].shatrughna94__Manager__r.Name);
            }
            var result = component.set('v.listOfBalance',resultValue);
        });
        $A.enqueueAction(leaveBalance);
        // Exclude public holiday  between leaves:
        helper.holidayCalculationHelper(component, event, helper);        
    },
    handleUploadFinished:function(component,event,helper) {
       helper.handleUploadFinishedHelper(component,event,helper);
    },
    calculateDay :function (component,event,helper) {
        component.set("v.checkDays",true);
        var check =  component.get("v.checkDays",true);
        if (check) {
            helper.helperMethod(component,event,helper); 
        }
    },
    getPersonalLeave:function(component, event, helper) {
        helper.getPersonalLeaveTypeHelper(component, event, helper);
    },
    fullOrHalf:function(component, event, helper) {
        helper.fullOrHalfHelper(component, event, helper);
    },
    submitApproval : function (component, event, helper){
           helper.submitApprovahelper(component,event,helper); 
    }
})