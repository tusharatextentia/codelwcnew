public with sharing class ContactController1 {
    
    @AuraEnabled(cacheable=true)
    public static List<contact> searchContacts(String searchKey)

    {
        String strConName = '%'+ searchKey +'%'; 

        List<Contact> conList = [   
                                    SELECT Id, Name, Email, MobilePhone, 
                                                                        Account.BillingCity, Account.BillingState 
                                    FROM Contact 
                                    WHERE Name 
                                                LIKE:strConName 
                                    WITH SECURITY_ENFORCED
                                ];

        return conList;

    }
}