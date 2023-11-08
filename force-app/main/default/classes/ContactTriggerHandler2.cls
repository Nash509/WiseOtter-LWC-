Public class ContactTriggerHandler2{
  public static void createContacts(List<Contact> newCon, list<Contact> oldCon){
    set<id> accountsToUpdate = new set<id>();
    if(oldCon == null){
      for(Contact con: newCon){
        accountsToupdate.add(con.accountID);
      }

    }
    if(oldCon!=Null){
      for(Contact conInUpdate: oldCon){
        accountsToUpdate.add(conInUpdate.accountId);
      }
    }
    
      

    if(!getAccounts.isEmpty()){
      for (account a: getAccounts){
        string count = getAccounts.contacts.size();
        account acc = new account();
        acc.ContactCount__c = count;
        finalList.add(acc);
      }
    }

    if(finalList.isEmpty()){
      update finalList();
    }

  }
}