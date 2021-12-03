({
	doInit : function(component, event, helper) {    
        
	  var action = component.get("c.appCustomWrapListMthd");
        action.setCallback(this, function(response){
            var state = response.getState();            
            if(state=='SUCCESS'){
                var result = response.getReturnValue();              
                component.set('v.wrapListItems',result);
            }
        });
        $A.enqueueAction(action);
	},
    
    editTalent : function( component, event, helper ) {
        var index = event.target.dataset.index;
        var thisObjId = event.target.dataset.sfid;
         var thisId = event.target.id;
        var wrapListItems = component.get( "v.wrapListItems" );        
        component.set('v.recSelectId',thisId);
        for ( var i = 0; i < wrapListItems.length; i++ ) {
            if(wrapListItems[i].editMode == true){
                var eventToast = $A.get("e.force:showToast");
                eventToast.setParams({
                    "title":'Error',
                    "type":'error',
                    "message":'You can edit only one record at a time.'
                });
                eventToast.fire();
                return false;
            }
            wrapListItems[i].editMode = false;
        }
        wrapListItems[index].editMode = true;
        component.set( "v.wrapListItems", wrapListItems );        
    },
    
    cancelEdit : function(component, event, helper) {        
        var index = event.target.dataset.index;
        var wrapListItems = component.get( "v.wrapListItems" );
        wrapListItems[index].editMode = false;
        component.set( "v.wrapListItems", wrapListItems );         
         helper.refreshView(component);
    },
    
    saveEditedTalent:function(component, event, helper){
        var action = component.get("c.saveEdited");
        var studentVal = component.find('studentName').get('v.value');
        var addressId = component.find('addressId').get('v.value');
        var emailId = component.find('emailId').get('v.value');

        var recIdName = component.get('v.recSelectId');        
        action.setParams({"editName":studentVal, "editAddress":addressId, "editEmail":emailId, "recId":recIdName});
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state == "SUCCESS"){
                var result = response.getReturnValue();
                var index = event.target.dataset.index;
                 helper.refreshView(component);
                component.set('v.recSelectId',null);
                var eventToast = $A.get("e.force:showToast");
                eventToast.setParams({
                    "title":'Success',
                    "type":'success',
                    "message":'Record updated successfully.'
                   });
                 eventToast.fire();                 
            }
        });
        $A.enqueueAction(action);
      
    },
    
    deleteRowId:function(component,event,helper){
        var sfid = event.target.dataset.sfid;        
        var action =component.get('c.delectRecId');       
        action.setParams({'delRecId':sfid});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var result = response.getReturnValue();                
                var wrapListItems = component.get( "v.wrapListItems" );
                component.set( "v.wrapListItems", wrapListItems );
                helper.refreshView(component);
                alert('record deleted successfully');                
                var eventToast = $A.get("e.force:showToast");
                eventToast.setParams({
                    "title":'Success',
                    "type":'success',
                    "message":'Record deleted successfully.'
                   });
                 eventToast.fire();
            }
        });
        $A.enqueueAction(action);
    },   
 })