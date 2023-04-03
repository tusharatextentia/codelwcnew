@isTest
public class AccountTriggerHandlerTest {
	@isTest
    public static void updateRating (){
        //Create sample data
        List<Account> accList = new List<Account>();
		
        for (Integer i=1; i<=5 ; i++){
            Account acc = new Account();
            acc.Name = 'Test ' +i;
            acc.Industry = 'Energy';
            accList.add(acc);
		}
		Test.startTest();
        insert accLIst;
        Test.stopTest();
        
        List<Account> updatedAccList = [SELECT Id, Rating FROM Account WHERE Id =:accLIst[0].Id ];
        System.assertEquals('Hot', updatedAccList[0].Rating);
    }
}