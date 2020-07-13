// ImplicitBinding : thằng nào đnag gọi thằng đó

// áp dụng với this đó là khi call-site có context là object. 

function foo() {
    var a = 10;
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); 
// foo();