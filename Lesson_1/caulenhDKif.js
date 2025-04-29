// cac kieu tra ve gia tri false
/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

/**
 Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

- '0' (một chuỗi chứa số không)
- ' ' (một chuỗi chứa dấu cách)
- 'false' (một chuỗi chứa từ khóa false)
- [] (một array trống)
- {} (một object trống)
- function(){} (một hàm "trống")
 */
var fullName = 'Tung Nguyen'

if(fullName){
    console.log('DIEU KIEN DUNG')
} else{
    console.log('DIEU KIEN SAI')
}