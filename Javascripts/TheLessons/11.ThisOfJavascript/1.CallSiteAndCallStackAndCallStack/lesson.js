// Call site là vị trí mà đoạn code được gọi, không phải là vị trí code được khai báo.
// Call-stack( một hàng đợi khi các function được thực thi).

function Hello(){
    // call stack is : Name
    console.log('hello');
    Name();  // <-- Call site of Name
}

function Name(){
    console.log('Cuong');
}

Hello(); //<-- Call site of Hello

