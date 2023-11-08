trigger ContactTrigger on contact (after insert,after update,after delete, after undelete) {

    if(trigger.isAfter && trigger.isInsert ){
        Set<Id> acidset = new Set<Id>();
        for(Contact c: trigger.new){
            if(string.isNotBlank(c.AccountId)){
                acidset.add(c.AccountId);
            }
        }
        Map<Id,Account> accountsToUpdate= new Map<Id,Account>();
        if(string.isNotBlank(c.AccountId)){
         list<AggregateResult> result = [select AccountId, COUNT(id) totalContcts FROM contact WHERE AccountId IN : acidset GROUP BY AccountId]; 
         for(AggregateResult re : result){
           string relatedAccountId = string.valueOf(re.get('accountID'));
           integer contactcount = Integer.valueOf(re.get('totalContacts'));
            Account a = new Account(id=relatedAccountId,contactCount__c = contactcount);
            accountsToUpdate.put(relatedAccountId, a);
         }
         for(id noCont : trigger.new){
            if(accountsToUpdate.containsKey(noCont.id)){
                account acc = new Account(id= noCont.id, contactCount__c=0);
                accountsToUpdate.put(noCont,contactCount__c=0);
                
            }
         }
         update accountsToUpdate;
        }
        
    }
    if(trigger.isAfter && trigger.isUpdate ){
        set<id> afterupdateaccountset = new set<id>();
        for(contact con: trigger.new){
            if(string.isBlank(con.AccountId)){
                afterupdateaccountset.add(con.AccountId);
            }else if(trigger.oldmap.get(con.id)?.AccountId != con.AccountId){
                afterupdateaccountset.add(trigger.oldmap.get(con.id)?.AccountId);
                afterupdateaccountset.add(con.AccountId);
            }
        }
    }
    
}