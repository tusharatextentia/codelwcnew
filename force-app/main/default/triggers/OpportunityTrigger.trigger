trigger OpportunityTrigger on Opportunity (before insert) {
   OpportunityTriggerHandler.updateDescription(trigger.new);
}