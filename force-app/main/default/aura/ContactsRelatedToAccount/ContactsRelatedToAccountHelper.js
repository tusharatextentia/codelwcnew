({
    loadContacts: function(component) 
    {
        var action = component.get("c.getContacts");
        
        action.setParams({
            recordId: component.get("v.recordId")
        });
        
        action.setCallback(this, function(response)
        {                
                component.set("v.contacts", response.getReturnValue());           
        });
      /*  
        action.setCallback(this, function(response) 
        {
            var state = response.getState();
            if (state === "SUCCESS") 
            {
                var contact = response.getReturnValue();
                component.set("v.contacts", contacts);
            }
            else 
            {
                console.log("Failed with state: " + state);
            }
        });
        */
        $A.enqueueAction(action);
    }
})