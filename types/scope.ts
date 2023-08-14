var global_num = 114 // global variable

class Numbers {
    num_val = 514; // instance variable
    static static_val = 1919; // static variable

    storeNum(): void {
        var local_num = 810; // local variable
    }
}

console.log("The global variable is " + global_num)
console.log("The static variable is " + Numbers.static_val)

var obj = new Numbers()
console.log("The instance variable is " + obj.num_val)
