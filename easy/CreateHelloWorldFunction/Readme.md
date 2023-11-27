# task
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10

# pic
![Q](https://github.com/AV-Loginova/LeetCode/blob/main/easy/CreateHelloWorldFunction/image.png?raw=true)
<img width="1139" alt="table" src="https://github.com/AV-Loginova/LeetCode/assets/129111624/e88284f3-0288-4303-80b7-d9bb490054d6">
