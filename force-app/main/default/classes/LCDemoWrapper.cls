public with sharing class LCDemoWrapper {
    public class WrapperTest{

        @AuraEnabled
        public string myString1{get; set;}

        @AuraEnabled
        public integer myInteger1{get; set;}
        
    }
}