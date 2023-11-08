public with sharing class LimitContactsOnOpportunity {
  public static void beforeInsert(list<Opportunity> newOpp) {
    set<Id> opportunityIds = new Set<Id>();
    for (Opportunity oP : newOpp) {
      if (oP.LeadSource == 'web') {
       op.addError('Sav ah web la padi lammidi');
      }
    }
  }
}
