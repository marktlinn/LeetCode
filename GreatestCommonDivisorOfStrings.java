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