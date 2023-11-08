public with sharing class AccountTriggerHandler {
  public static void createContact(
    list<Account> accounts,
    map<id, Account> oldAccounts
  ) {
    List<Contact> newConToUpdate = new List<Contact>();
    set<id> fieldTrueAccounts = new Set<Id>();
    List<Contact> checkedTrueContacts = new List<Contact>();
    for (account a : accounts) {
      if (oldAccounts == null) {
        Contact con = new contact();
        con.FirstName = 'testcontact';
        con.LastName = a.Name;
        con.AccountId = a.Id;
        newConToUpdate.add(con);
      }
      if (
        oldAccounts != null &&
        (oldAccounts.get(a.id).field_update__c != a.field_update__c) &&
        a.field_update__c == true
      ) {
        fieldTrueAccounts.add(a.id);
      }
    }
    if (!fieldTrueAccounts.isEmpty()) {
      for (Contact con : [
        SELECT id, name, Description, AccountId
        FROM contact
        WHERE AccountId IN :fieldTrueAccounts
      ]) {
        con.Description = 'after checkbox trigger';
        checkedTrueContacts.add(con);
      }
      if (!checkedTrueContacts.isEmpty()) {
        update checkedTrueContacts;
      }
      if (!newConToUpdate.isEmpty())
        insert newConToUpdate;
    }
  }
}
