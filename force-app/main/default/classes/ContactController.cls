public with sharing class ContactController 
{
    @AuraEnabled
    public static List<Contact> getContacts(Id recordId)
    {
        List<Contact> contact = [SELECT id, name, Email, MobilePhone, 
                                        Account.BillingCity , Account.BillingState
                                FROM Contact
                                WHERE AccountId=: recordId ];
        return contact;
    }
}