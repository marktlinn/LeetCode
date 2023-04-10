/*
Link:
https://leetcode.com/problems/duplicate-emails/description/

Table: Person
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
Write an SQL query to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.
Return the result table in any order.
The query result format is in the following example.

Example 1:
  Input: 
  Person table:
  +----+---------+
  | id | email   |
  +----+---------+
  | 1  | a@b.com |
  | 2  | c@d.com |
  | 3  | a@b.com |
  +----+---------+
Output: 
  +---------+
  | Email   |
  +---------+
  | a@b.com |
  +---------+
Explanation: a@b.com is repeated two times.
*/

/*
Pseudocode:
Select all emails form the person table, group them by their email and return/display all emails with a count above 1
*/

/*# Write your MySQL query statement below*/

SELECT email
FROM person
GROUP BY email
HAVING COUNT(email) > 1