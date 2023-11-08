public with sharing class contactTriggerHelper {
  public static void countContacts(
    List<Contact> newContacts,
    List<Contact> oldContacts
  ) {
    set<id> acntset = new Set<Id>();
    if (oldContacts == null) {
      for (Contact con : newContacts) {
        if (con.AccountId != null) {
          acntset.add(con.AccountId);
        }
      }
    }
    if (oldContacts != null) {
      for (Contact con : oldContacts) {
        if (con.AccountId != null) {
          acntset.add(con.AccountId);
        }
      }
    }
    List<Account> accountsToUpdate = new List<Account>();
    if (acntset != null) { 
      for (account acc : [
        SELECT id, active__C, (SELECT id FROM Contacts)
        FROM Account
        WHERE ID IN :acntset
      ]) {
        if (acc.Contacts.size() > 0) {
          acc.ContactCount__c = acc.Contacts.size();
          accountsToUpdate.add(acc);
        } else {
          acc.ContactCount__c = 0;
          accountsToUpdate.add(acc);
        }
      }
    }
    if (!accountsToUpdate.isEmpty()) {
      update accountsToUpdate;
    }
  }
 
}
