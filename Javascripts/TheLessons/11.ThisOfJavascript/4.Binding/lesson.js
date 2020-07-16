// 1. Binding mặc định

function foo() {
  console.log(this.a);
}

var a = 2;

foo(); // 2

// Khi hàm foo được gọi,
// vì chưa có đối tượng nào được khởi tạo nên this.a sẽ tham chiếu tới thuộc tính a của đối tượng global.

// 2. Binding ngầm định.
// Áp dụng trong trường hợp call-site có một đối tượng ngữ cảnh,
// hay còn gọi là đối tượng chứa (sở hữu) call-site.

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

obj.foo(); // 2

// Khi hàm foo được gọi, this sẽ đại diện cho đối tượng obj vì obj chứa tham chiếu hàm tại thời điểm này.
// this.a tương tự như obj.a.

/* Mất binding ngầm */
//  bind ngầm bị mất và trở về binding mặc định.

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` cùng thuộc tính nhưng ở golobal

bar(); // "oops, global"

// Dù bar được gán cho obj.foo nhưng thực tế đó chỉ là một tham chiếu tới chính foo mà thôi.
// Không có đối tượng nào được tham chiếu cả. Hơn nữa, bar() là một call-site độc lập.
//  Do đó binding mặc định được áp dụng.

// 3. Binding tường minh
// -Sử dụng hàm call() hoặc apply(). 
// Hai hàm này đều sử dụng tham số đầu tiên là đối tượng mà this tham chiếu tới. 

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2

// Gọi hàm foo với binding tường minh sử dụng foo.call ép buộc this trỏ tới obj. 
// Nếu tham số là kiểu nguyên thủy thì các giá trị này sẽ được chuyển về dạng object tương ứng.
