({
    doInit : function(component, event, helper) {
        
        component.set("v.message" , "kahi Pan") ;
        component.set("v.Sapkal" , "Confidential information") ;

    } ,
   
    handleClick : function(component, event, helper) {
        
         component.set("v.message" , "Button Clicked") ;
        /* var btn = event.getSource();
        var msg = btn.get("v.label"); 
        component.set("v.message" , msg)*/
        // component.set(  "v.message" , event.getSource.get("v.label")  ) ;

    } ,
    
    handleClick1 : function(component, event, helper) {
        
        component.set("v.Sapkal" , "Sanket Sakpal, Alumini of DY Patil College of Engineering, Batch of 2019");
    
    }
})