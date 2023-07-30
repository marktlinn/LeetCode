/*
Link: https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
  Input: s = "hello"
  Output: "holle"

Example 2:
  Input: s = "leetcode"
  Output: "leotcede"

Constraints:
  1 <= s.length <= 3 * 105
  s consist of printable ASCII characters.
*/

// import java.util.ArrayList;

class ReverseVowelsInString {
  //First solution
  // public static  String reverseVowels(String s) {
  //   String vowels = "[aeiou]";
  //   StringBuilder result = new StringBuilder(s);
  //   ArrayList<Character> list = new ArrayList<>();

  //   for (int i = 0; i < s.length(); i++) {
  //     char currentChar = s.charAt(i);
  //     if (String.valueOf(currentChar).toLowerCase().matches(vowels))  {
  //       list.add(currentChar);
  //     }
  //   }

  //   int end = list.size()-1;
  //   for (int i = 0; i < result.length(); i++) {
  //     char currentChar = s.charAt(i);
  //      if (String.valueOf(currentChar).toLowerCase().matches(vowels)) {
  //       result.setCharAt(i, list.get(end));
  //       end--;
  //     }
  //   }
  //   return result.toString();
  // }

  // Second Solution
  // public static String reverseVowels(String s) {
  //   String vowels = "[aeiou]";
  //   char[] carr = s.toCharArray();
  //   ArrayList<Integer> indeces = new ArrayList<>();

  //   for (int i = 0; i < carr.length; i++) {
  //     if (String.valueOf(carr[i]).toLowerCase().matches(vowels)) {
  //       indeces.add(i);
  //     }
  //   }

  //   int i = 0;
  //   int j = indeces.size() - 1;
  //   while (i <= j) {
  //     char temp = carr[indeces.get(i)];
  //     carr[indeces.get(i)] = carr[indeces.get(j)];
  //     carr[indeces.get(j)] = temp;
  //     i++;
  //     j--;
  //   }
  //   return new String(carr);
  // }

  //Third solution
  public static String reverseVowels(String s) {
    char[] carr = s.toCharArray();
    int i = 0;
    int j = carr.length-1;
    
    while (i < j) {
      if (!isVowel(carr[i]))
        i++;
      if (!isVowel(carr[j]))
        j--;
      if (isVowel(carr[i]) && isVowel(carr[j])) {
        char temp = carr[i];
        carr[i] = carr[j];
        carr[j] = temp;
        i++;
        j--;
      }
    }
    return new String(carr);
  }

  public static boolean isVowel(char c) {
    String vowels = "[aeiou]";
    return String.valueOf(c).toLowerCase().matches(vowels);
  }
  public static void main(String[] args) {
    System.out.println(reverseVowels("hello"));
    System.out.println(reverseVowels("Leetcode"));
    System.out.println(reverseVowels("javascript"));
    System.out.println(reverseVowels("aA"));
  }
}

