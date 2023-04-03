public with sharing class fetchContacts {
    
    @AuraEnabled
    public static List<Contact> getRelatedList(Id recordId)
    {
        List<Contact> Conlist = [SELECT id, name, Email, MobilePhone, 
                                        Account.BillingCity , Account.BillingState
                                FROM Contact
                                WHERE AccountId=: recordId ];
        //SELECT Id, BillingCity , BillingState, (SELECT Id, Name , Email, MobilePhone FROM Contacts) FROM Account
        return Conlist;     
    }
}