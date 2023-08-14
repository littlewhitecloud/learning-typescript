"use strict";
/*
if (boolean_expression) {
    # Run the code here if the boolean_expression is true
}
*/
var num = 5;
if (num > 0) {
    console.log("num is bigger than 0");
}
/*
if (boolean_expression) {
    # Run the code here if the boolean_expression is true
} else {
    # Run the  code here if the boolean_expression is false
}
*/
var num = 12;
if (num % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
/*
if (boolean_expression 1) {
    # Run the code here if the boolean_expression 1 is true
} else if (boolean_expression 2) {
    # Run the code here if the boolean_expression 2 is true
} else if (boolean_expression 3) {
    # Run the code here if the boolean_expression 3 is true
} else {
    # Run the  code here if all the boolean_expressions are false
}
*/
var num = 2;
if (num > 0) {
    console.log("bigger than 0");
}
else if (num < 0) {
    console.log("lower than 0");
}
else {
    console.log("is 0");
}
/*
switch(expression) {
    case constant-expression:
        statement(s);
        break;
    case constant-expression:
        statement(s);
        break;
    
    default:
        statement(s);
        break;
}
*/
var grade = "A";
switch (grade) {
    case "A": {
        console.log("Great");
        break;
    }
    case "B": {
        console.log("Good");
        break;
    }
    case "C": {
        console.log("Not bad");
        break;
    }
    case "D": {
        console.log("Bad");
        break;
    }
    default: {
        console.log("Not a grade!");
        break;
    }
}
