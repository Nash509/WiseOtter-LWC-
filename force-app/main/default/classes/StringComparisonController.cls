public with sharing class StringComparisonController {
  @AuraEnabled(cacheable=true)
  public static Boolean compareStrings(String string1, String string2) {
    // Compare the two strings and return true if they are equal, false otherwise
    return string1.equals(string2);
  }
}
