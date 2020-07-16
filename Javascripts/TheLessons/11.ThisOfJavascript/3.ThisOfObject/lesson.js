var user = {
  firstName: "Cường",
  lastName: "Thái",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
    function showFullName() {
      console.log("Tôi tên" + " " + this.firstName + " " + this.lastName); // trỏ đến thăng firstName vaf lastName ở global
      console.log(this); // trỏ đến global
    }
    showFullName();
  },
};

var firstName = "Cường";
var lastName = "Thái Quốc";

user.showName();
