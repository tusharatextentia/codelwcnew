@isTest
public class OpportunityTriggerHandlerTest {
	@isTest
    public static void updateDescriptionTest(){
        List <Opportunity> OppList = new List <Opportunity> ();
        
        for(integer i=1 ; i<=5 ; i++){
            opportunity opp = new  opportunity ();
            opp.Name = 'Test' +i;
            opp.Amount = 200005;
            
            OppList.add(opp);
        }
        Test.startTest();
    	insert OppList;
    	Test.stopTest();
    
        List<Opportunity> UpdatedOppList = [SELECT Id, Description FROM Opportunity WHERE Id=:oppList[0].Id];
        System.assertEquals('Hot Opportunity', UpdatedOppList[0].Description);
    } 
    
}