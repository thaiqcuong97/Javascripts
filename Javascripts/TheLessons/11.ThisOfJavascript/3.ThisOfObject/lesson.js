var user = {
    firstName: 'Cường',
    lastName : 'Thái',
    showName : function(){
      console.log(this.firstName + ' ' + this.lastName);
      function showFullName(){
        console.log('Tôi tên' + ' ' + this.firstName + ' ' + this.lastName)
        // console.log(this)
      }
      showFullName()
    }
}

var firstName = 'Cường';
var lastName = 'Thái Quốc';

user.showName();