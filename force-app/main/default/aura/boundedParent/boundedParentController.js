({
    updateParent : function(component, event, helper) {
        component.set=("v.parentVar" , "bounded parent component")
    } ,

    onParentVarChange: function(component, event, helper) {
        console.log("Parent VALUE HAS CHANGED");
        console.log("old Value : " + event.getParam("oldValue"));
        console.log("NEW vALUE : " + event.getParam("value"));
    }
})