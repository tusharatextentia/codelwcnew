trigger AccountTrigger on Account (before insert) {
	AccountTriggerHandler.updateRating(trigger.new);
}