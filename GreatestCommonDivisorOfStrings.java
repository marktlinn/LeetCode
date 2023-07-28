/*
Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.Map;

// first solution, works but can be improved.
// class GreatestCommonDivisorOfStrings {
// public static String gcdOfStrings(String str1, String str2) {
// StringBuilder result = new StringBuilder();
// ArrayList<String> strList = new ArrayList<>();
// int s1 = str1.length();
// int s2 = str2.length();
// int shortest = Math.min(s1, s2);

// for (int i = 0; i < shortest; i++) {
// if (str1.charAt(i) == str2.charAt(i)) {
// result.append(str1.charAt(i));
// }
// if (result.length() > 0) {
// strList.add(result.toString());
// }
// if (str1.charAt(i) != str2.charAt(i)) {
// result.setLength(0);
// }
// }

// if (result.length() > 0)
// strList.add(result.toString());

// Map<Integer, String> map = new HashMap<>();
// for (String w : strList) {
// String r1 = str1.replaceAll(w, "");
// String r2 = str2.replaceAll(w, "");
// if (r1.equals("") && r2.equals(""))
// map.put(w.length(), w);
// }

// int count = 0;
// for (int key : map.keySet()) {
// if (key > count)
// count = key;
// }

// String toReturn = map.get(count);

// return toReturn.length() > 0 ? toReturn : "";
// }

// public static void main(String[] args) {
// System.out.println(gcdOfStrings("ABABAB", "ABAB"));
// }
// }

class GreatestCommonDivisorOfStrings {
  public static String gcdOfStrings(String str1, String str2) {
    String smaller = str1.length() > str2.length() ? str2 : str1;
    String bigger = str1.length() > str2.length() ? str1 : str2;

    if (bigger.equals(smaller)) {
      return smaller;
    }
    if (!bigger.startsWith(smaller, 0)) {
      return "";
    }
    return gcdOfStrings(bigger.substring(smaller.length()), smaller);
  }

  public static void main(String[] args) {
    System.out.println(gcdOfStrings("ABABAB", "ABAB"));
  }
}