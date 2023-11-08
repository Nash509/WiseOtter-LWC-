trigger TriggerOpportunity on Opportunity (before insert) {
    if (trigger.isBefore && trigger.isInsert) {
        LimitContactsOnOpportunity.beforeInsert(trigger.new);
        
    }

}