({
	doInit : function(component, event, helper) {
	component.set("v.Var1" , "Demo value form component controller")
	
	var data = {'name' : 'Test Name' ,
				'email' : 'test@test.com'} ;

	component.set("v.jsObject" , data) ; 
	
	component.set("v.userData" , 
					{
						'myString1' : 'SSS Batch 15' ,
						'myInteger1' : 2022
					}
				)
	}
})