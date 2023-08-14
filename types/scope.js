var global_num = 114; // global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 514; // instance variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 810; // local variable
    };
    Numbers.static_val = 1919; // static variable
    return Numbers;
}());
console.log("The global variable is " + global_num);
console.log("The static variable is " + Numbers.static_val);
var obj = new Numbers();
console.log("The instance variable is " + obj.num_val);
