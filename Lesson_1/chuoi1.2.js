var myString = '  Hoc JS tai JS JS F8  ';

//1. Find index
console.log(myString.indexOf('JS', 6));

//Neu co nhieu chu JS thi chi so dang sau la vi tri bat dau tim kiem
console.log(myString.lastIndexOf('JS')); //tra ve JS cuoi cung
// console.log(myString.search('JS')) : giong indexOf nhung khong ho tro chi so
//2. Cut String
console.log(myString.slice(4, 6)); //4: chi so bat dau 6: chi so ket thuc

//3.Replace
//console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript')); //thay tat ca JS thanh Javascript

//4.Convert to upper/lower case
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

//5. Trim - Loai bo khoang trang thua
console.log(myString.trim());
// console.log(myString.trim().length); kiem tra do dai xem da loai bo khoang trang chua

 //6. Split - tach chuoi thanh mang
 var languages = 'Javascript, PHP, Ruby';
 console.log(languages.split(', '));

 //7. Get a character by index
 const myString2 = 'Son Dang';
 console.log(myString2.charAt(0));
