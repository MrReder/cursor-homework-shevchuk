"use strict";
/*
function add(c, d) {
    console.log(this.a + this.b + c + d);
}
var ten = { a: 1, b: 2 };
add.call(ten, 3, 4);

add.apply(ten, [3, 4]);

var small = {
    a: 1,
    go: function (b, c, d) {
        console.log(this.a + b + c + d);
    }
}
var large = {
    a: 100
}

small.go(2, 3, 4);

small.go.call(large, 2, 3, 4);

var bindTest = small.go.bind(large, 2);

console.log(bindTest);
bindTest(3, 4);
*/

var small = {
    a: 1,
    go: function (b, c, d) {
        console.log(this.a + b + c + d);
    }
}
var large = {
    a: 100
}
small.go(2, 3, 4);
// logs 1+2+3+4 => 10
var bindTest = small.go.bind(large, 2);
console.log(bindTest);
// logs => function (b,c,d){console.log(this.a+b+c+d);}
bindTest(3, 4);
  // logs 100+2+3+4 => 109