"use strict";
var num1 = 1;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log(res);
res = num1 - num2;
console.log(res);
res = num1 * num2;
console.log(res);
res = num1 / num2;
console.log(res);
res = num1 % num2;
console.log(res);
num1++; // as same as c++
console.log(num1);
num2--;
console.log(num2);
console.log(num1);
console.log(num2);
var out = num1 > num2;
console.log(out);
out = num1 < num2;
console.log(out);
out = num1 >= num2;
console.log(out);
out = num1 <= num2;
console.log(out);
out = num1 == num2;
console.log(out);
out = num1 != num2;
console.log(out);
var avg = 114;
var per = 514;
console.log(avg);
console.log(per);
var ret = ((avg > 50) && (per > 80));
console.log(ret);
ret = ((avg > 50) || (per > 50));
console.log(ret);
ret = !((avg > 50) && (per > 80));
console.log(ret);
var a = 2;
var b = 3;
var result;
result = (a & b);
console.log("(a & b) => ", result);
result = (a | b);
console.log("(a | b) => ", result);
result = (a ^ b);
console.log("(a ^ b) => ", result);
result = (~b);
console.log("(~b) => ", result);
result = (a << b);
console.log("(a << b) => ", result);
result = (a >> b);
console.log("(a >> b) => ", result);
result = (a >>> 1);
console.log("(a >>> 1) => ", result);
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a);
a += b;
console.log("a += b: " + a);
a -= b;
console.log("a -= b: " + a);
a *= b;
console.log("a *= b: " + a);
a /= b;
console.log("a /= b: " + a);
a %= b;
console.log("a %= b: " + a);
// test ? expr 1 : expr 2
var num = 2;
var test = num > 0 ? "is bigger than 0" : "is lower than 0 or is 0";
console.log(test);
var x = 4;
var y = -x;
console.log(x);
console.log(y);
var msg = "Hello" + "World";
console.log(msg);