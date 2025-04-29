var fullname = 'Nguyen Xuan Tung'
console.log(fullname)
// console.warn(fullname)
// console.error(fullname)
// confirm('Xác nhận bạn đủ tuổi?')
// prompt('Xác nhận bạn đủ tuổi')


//Hàm đặt thời gian cho code chạy 
setTimeout(function(){
    alert('Thong bao')
}, 1000) //thời gian là ms

//Hàm tương tự setTimeout nhưng chạy liên tục
setInterval(function(){
    console.log('Day la log ' + Math.random)
}, 1000)