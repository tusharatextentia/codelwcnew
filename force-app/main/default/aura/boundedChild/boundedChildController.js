({
    updateChild : function(component, event, helper) {
        component.set("v.childVar" , "updated Child Component")
    } ,

    onChildVarChange : function(component, event, helper) {
        console.log("CHILD VALUE HAS CHANGED");
        console.log("old Value : " + event.getParam("oldValue"));
        console.log("NEW vALUE : " + event.getParam("value"));
    }
})