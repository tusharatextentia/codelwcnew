public class CustomAccountController {
    public List<Account> accountList{get;set;}
    
    public CustomAccountController(){
        accountList = [SELECT Id, Name, website FROM Account ] ; 
        }
}