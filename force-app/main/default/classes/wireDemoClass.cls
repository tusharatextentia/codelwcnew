public with sharing class wireDemoClass {
    @AuraEnabled (cacheable = true)
    public static List<Account> getAccountName()
    {
        return [SELECT Id, Name , AccountNumber FROM Account];
    }
}