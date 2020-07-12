// Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Done'

function countDown(number){
    const times = setInterval(() => {
        console.log(number);
        number--;
        if(number < 0){
            console.log('Done')
            clearInterval(times)
        }
    },1000) 
}
countDown(10)