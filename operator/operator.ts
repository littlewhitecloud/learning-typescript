var num1: number = 1
var num2: number = 2
var res: number = 0

res = num1 + num2
console.log(res)

res = num1 - num2
console.log(res)

res = num1 * num2
console.log(res)

res = num1 / num2
console.log(res)

res = num1 % num2
console.log(res)

num1++ // as same as c++
console.log(num1)

num2--
console.log(num2)

console.log(num1)
console.log(num2)

var out: boolean = num1 > num2
console.log(out)

out = num1 < num2
console.log(out)

out = num1 >= num2
console.log(out)

out = num1 <= num2
console.log(out)

out = num1 == num2
console.log(out)

out = num1 != num2
console.log(out)

var avg: number = 114;
var per: number = 514;

console.log(avg)
console.log(per)

var ret: boolean = ((avg > 50) && (per > 80));
console.log(ret)

ret = ((avg > 50) || (per > 50))
console.log(ret)

ret = !((avg > 50) && (per > 80))
console.log(ret)

var a: number = 2;
var b: number = 3;

var result;

result = (a & b);
console.log("(a & b) => ",result)

result = (a | b);
console.log("(a | b) => ",result)

result = (a ^ b);
console.log("(a ^ b) => ",result);

result = (~b); 
console.log("(~b) => ",result);

result = (a << b); 
console.log("(a << b) => ",result); 

result = (a >> b); 
console.log("(a >> b) => ",result);

result = (a >>> 1); 
console.log("(a >>> 1) => ", result);

var a: number = 12
var b: number = 10

a = b 
console.log("a = b: " + a)

a += b
console.log("a += b: " + a)

a -= b 
console.log("a -= b: " + a)

a *= b 
console.log("a *= b: " + a)

a /= b 
console.log("a /= b: " + a)

a %= b 
console.log("a %= b: " + a)

// test ? expr 1 : expr 2

var num: number = 2;

var test = num > 0 ? "is bigger than 0" : "is lower than 0 or is 0"
console.log(test)

var x: number = 4
var y = -x

console.log(x)
console.log(y)

var msg: string = "Hello" + "World"
console.log(msg)