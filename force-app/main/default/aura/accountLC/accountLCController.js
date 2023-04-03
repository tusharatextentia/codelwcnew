({
    doInit : function(component, event, helper) {
        
        /* Calling the methods of account controller  class */
        
        /* !c. is used for calling JScontroller
        c. is used for calling controller class */
        var action = component.get("c.getAccounts");
        
        
        action.setCallback(this , function(response){
            
            var state = response.getState();
            if(state === "Success"){
                component.set("v.accList" , response.getReturnValue());
            }
        })  ;
        $A.enqueueAction(action) ;
    }
})