({
	 handleComponentEvent : function(cmp, event) {
        var getAccountId = event.getParam("accountRecordId");
        alert('getAccountId--->'+ getAccountId);
        cmp.set("v.messageFromEvent", getAccountId);
       
    }
})