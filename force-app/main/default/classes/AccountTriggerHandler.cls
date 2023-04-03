public class AccountTriggerHandler {
    public static void updateRating(List<Account> accList){
        for (Account acc : accList){
            if(acc.industry == 'Media' || acc.industry == 'Energy'){
                acc.Rating='Hot';
            }
        }
    }
}