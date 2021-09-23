// let product = [
//     { id: 1, price: 10 },
//     { id: 2, price: 20 }
// ];
// console.log("Original : ", product);
// console.log('----------------------------------------')

// let newProduct = { id: 3, price: 30 };

// // เพิ่ม newProduct ,ไปใน product เดิม ใช้ spred operator
// product = [...product, newProduct];
// // product[product.length] = { id: newProduct.id, price: newProduct.price };
// console.log("Add Product : ", product);
// console.log('----------------------------------------')

// //สร้างตัวแปรใหม่แต่เอาค่ามาอยู่ด้วยกัน
// // let stock = [...product, newProduct];
// // console.log("New obj : ", stock);

// console.log('----------------------------------------')
//     // .length คือเลข id กับ price ที่เป็น numeric

// // product[product.length] = newProduct.id;
// // product[product.length] = newProduct.price;

// newProduct.id = 4;
// newProduct.price = 50;

// console.log("Add Final Product : ", product);
// console.log('----------------------------------------')

// //shallow copy
// newProduct.price = 100;
// console.log(">o< : ", product);

// Destructuring จะอยู่สุดท้ายเสมอ (x , ...y)
let product = [
    { id: 1, price: 10 },
    { id: 2, price: 20 }
];

[price1, price2, ...arr] = [product[0].price, product[1].price, 50, 100];
console.log("price1 :", price1);
console.log("price2 :", price2);
console.log("arr :", arr);
console.log("arr.length :", arr.length);

console.log("-----------------------------------------------");

function getStudentsInclass(instructor, ta, ...student) {
    return student;
}
let studentSec2 = getStudentsInclass('A.Umaporn', 'P.Toey', 'Opal', 'Dear', 'Game');
console.log("Sec2 :", studentSec2);

[instructor, ta, ...student] = ['A.Umaporn', 'P.Toey', 'Opal', 'Dear', 'Game'];
console.log("Student :", student);
console.log("Student.length :", student.length);

student[0] = 'Wareewan';
console.log("Change Name : ", student);