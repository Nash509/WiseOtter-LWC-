public with sharing class primaryContacthandler {
    public static void beforeInsert(List<Contact> newCon) {
        set<id> parentAccounts = new Set<Id>();
            for(contact con: newCon){
                if(string.isNotBlank(con.AccountId)){
                parentAccounts.add(con.AccountId);
            }
            }
            map<id,contact> contactMap = new map<id,contact>();
            list<contact> contactsList = [select id,accountId FROM contact WHERE primaryContact=true AND id IN : parentAccounts];
            for(Contact c: contactsList){
                    contactMap.put(c.AccountId,contactsList.size());
            }
            for(contact errorcon: newCon){
                    if(errorcon.primaryContact= true && errorcon.containskey(errorcon.AccountId) && contactMap.get(errorcon.AccountId)){
                       errorcon.addError('cant add more than one primary contact');
                    }
            }
        }
        public static void beforeUpdate(List<Contact> newCon, map<id,Contact> oldConMap){
            set<id> parentIds = new Set<Id>();
            for (contact con : newCon) {
                contact oldc = oldConMap.get(con.id);
                if(con?.accountid != oldc.AccountId){
                    parentIds.add(oldc.AccountId);
                    parentIds.add(con.AccountId);
                }else {
                    parentIds.add(con.AccountId);
                }
                 
                    
    
                
            }


        }

    }
    
