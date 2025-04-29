var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];

//To String
console.log(languages.toString());

//Join
console.log(languages.join(' - '));

//pop
console.log(languages.pop());// Xóa element cuối và trả về phẩn tử đã xóa

//push
console.log(languages.push('Dart', 'Java')) //Thêm element vào cuối và trả về độ dài mảng mới

//shift
console.log(languages.shift());//Xóa phần tử đầu và trả về phần tử đó

//unshift
console.log(languages.unshift('Dart'));//Thêm phần tử vào đầu mảng và trả về độ dài mảng mới
 
//Splicing
languages.splice(1, 2,'Golang'); //1: vi tri bat dau, 2: so luong phan tu muon xoa , Golang: element muon chen

console.log(languages)

//Concat
var languages2 =[
    'Dart',
    'Ruby'
]
console.log(languages.concat(languages2)); //Hợp nhất 2 mảng

//Slicing
console.log(languages.slice(1, 3))//Cắt phần tử 1: vị trí chỉ mục bắt đầu 3: vị trí kết thúc