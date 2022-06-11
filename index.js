// The writer determines whether the following variables are of type array.
var a = "[a, b, c, d]";
var b = [1, 2, 3, 4];
//TODO

//a是一个字符串
//b是一个数组

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

for (var i = 0; i < a.length; ++i) {
  a[i] = a[i] * 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var str1 = "",
  str2 = "",
  str3 = "";
var i;
for (i = 0; i < colors.length - 1; ++i) {
  str1 += colors[i] + " ";
  str2 += colors[i] + "+";
  str3 += colors[i] + ",";
}
str1 += colors[i];
str2 += colors[i];
str3 += colors[i];
console.log(str1);
console.log(str2);
console.log(str3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a, b) => b - a);
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
//TODO should output: 'a'
var result = {},
  mostCount = 0,
  res = null;
for (var i = 0; i < a.length; ++i) {
  if (result[a[i]] == null) {
    result[a[i]] = 1;
  } else {
    result[a[i]] += 1;
    if (mostCount < result[a[i]]) {
      mostCount = result[a[i]];
      res = a[i];
    }
  }
}
console.log(res);
