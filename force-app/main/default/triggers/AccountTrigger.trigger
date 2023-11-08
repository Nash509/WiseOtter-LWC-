trigger AccountTrigger on Account(after insert, after update) {
  if (Trigger.isAfter && (Trigger.isUpdate || Trigger.isInsert)) {
    AccountTriggerHandler.createContact(Trigger.new, Trigger.oldMap);
  }

}
