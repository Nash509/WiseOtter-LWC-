public with sharing class FetchContacts {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContacts() {
    return [SELECT FirstName, LastName FROM Contact ORDER BY LastName DESC];
  }
}
