({
    helperMethod : function(component, event, helper) {
        var listofholidays = component.get("v.lisofHolidays");
        var weekendlist = component.get("v.weekend");
        var startDate,endDate, calculateDay,
            ltype,d1,d2, holidays, weekend,
            weekendForSatrtDate,weekEndForEndDate;
        startDate = new Date(component.find("startDate").get("v.value"));
        endDate   = new Date(component.find("ToDate").get("v.value"));
        ltype     = component.find("ltype").get("v.value");
        weekendForSatrtDate = startDate.getDay();
        weekEndForEndDate  = endDate.getDay();
        d1 = new Date(startDate);
        d2 = new Date(endDate); 
        // this.calculateweekEnd(d1,d2);
        this.calculateweekEndCopy(component,d1,d2);
        var totalweekendjs = component.get("v.totalWeekend");
        if ( ltype =='First Half'  ||  ltype == 'Second Half') {
            calculateDay = ((endDate-startDate) / 8.64e7)/2;
        }
        else { 
            if  (startDate == 'Invalid date' || endDate == 'Invalid Date') {
                component.set("v.totalleaveapply",1);
            }else {
                calculateDay = ((endDate-startDate) / 8.64e7 +1);
                if (totalweekendjs != 0) {
                    calculateDay = calculateDay - totalweekendjs;
                    //  alert('Total leave --->'+calculateDay);
                }
            } 
        }
        if (calculateDay !== null &&  !isNaN(calculateDay) ) {
            component.set("v.totalleaveapply",calculateDay);
        }else {
            component.set("v.totalleaveapply",0);
        }
    },
    /* calculateweekEnd : function( d1, d2) {
        var count =0,day,day2,nextDate,n,nextDay;
        while (d1 <= d2 ) {
        day = d1.getDay();
        day2 = d2.getDay();    
        if ((day === 6) || (day === 0)) { 
                count++;
                nextDate = d1;
                n= nextDate.setDate(d1.getDate() + 1); 
                nextDay = nextDate.getDay(); 
                if (((nextDay === 6) || (nextDay === 0)) && (nextDay <= day2)) {
                 count++;
                }
            }
            d1.setDate(d1.getDate() + 1);
        }
        component.set("v.weekend",count);
    },*/
    handleUploadFinishedHelper : function (component, event, helper) {
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
        uploadedFiles.forEach(file => console.log(file.name));
    },
    calculateweekEndCopy : function(component,d1,d2){
        var totalWeekends = 0; 
        for (var i = d1; i <= d2; i.setDate(i.getDate()+1)){
            if (i.getDay() == 0 || i.getDay() == 6) {
                totalWeekends++;
            }
        }
        alert(totalWeekends);
        component.set("v.totalWeekend",totalWeekends);
    },
    holidayCalculationHelper : function(component,helper,event) {
        // alert('Test1');
        var  holidayAction  = component.get("c.publicHoliday");
        holidayAction.setCallback(this,function(response){
            var resultValue = response.getReturnValue();
            let map = new Map();
            //alert(JSON.stringify(response.getReturnValue()));
        });
        $A.enqueueAction(holidayAction);
    },
    getPersonalLeaveTypeHelper : function (component, event, helper) {
       var selectedValue=component.find("sick_or_vactiontype").get("v.value");
       component.set("v.sick_or_vactiontype",selectedValue); 
    },
    fullOrHalfHelper : function (component, event, helper) {
      
       var selectedValue=component.find("levaeType").get("v.value");  
       component.set("v.levaeType",selectedValue); 
    },
    submitApprovahelper : function (component, event,helper) {
    var datalist = [];
    var getLeaveType = component.set("v.sick_or_vactiontype"); 
    var getFullOrHalf = component.set("v.levaeType"); 
    var myInputs = component.find("myDiv").find({instancesOf : "lightning:input"});
    for(var i = 0; i < myInputs.length; i++){
           datalist.push(myInputs[i].get("v.value"));  
           console.log(myInputs[i].get("v.value"));
         }
    }
})