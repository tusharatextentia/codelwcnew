import { api, LightningElement , track , wire } from 'lwc';
import getAccountName from '@salesforce/apex/wireDemoClass.getAccountName' ;

const columns = [
    { label : 'Name' , field : "Name" } ,
    { label : 'PLayer Record Id' , field : "Id" } ,
    { label : 'Name' , field : "Name" } ,
]
export default class ParentComponent extends LightningElement 
{
    @track columns = columns;
    @track data = [];
    
    @wire(getAccountName)
    wiredAccount({data , error}){
        if(data){
            this.data = data ;
        }
        else if (error){
            console.log("error occured")
        }
    }

    // Define a state variable fullName with an initial value of an object containing two properties firstname and lastname, 
    //both of which are set to an empty string.
    @track fullName = {firstname:"" , lastname:""}  ;

    // This function is called whenever the user types into an input field.
    handleChange(event)
    {
          //Extract the name attribute of the target element of the event object, 
          //which will be either firstname or lastname depending on which input field was changed.
        const field = event.target.name ;
        
        // If the name attribute is firstname, update the firstname property of the fullName object with the new value entered by the user, 
        //which is obtained from event.target.value.
        if(field === 'firstname')
        {
            this.fullName.firstname = event.target.value    ;
        }
        else if (field === 'lastname')
        {
            this.fullName.lastname = event.target.value ;
        }
    } ;

    handleClick()
    {
        this.template.querySelector("c-child-component").handleChangeValue();
    }
}