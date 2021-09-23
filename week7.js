let product = [
    { id: 1, price: 10 },
    { id: 2, price: 20 }
];
console.log("Original : ", product);
console.log('----------------------------------------')

let newProduct = { id: 3, price: 30 };
// เพิ่ม newProduct ,ไปใน product เดิม ใช้ spred operator
product = [...product, newProduct];
// product[product.length] = { id: newProduct.id, price: newProduct.price };
console.log("Add Product : ", product);
console.log('----------------------------------------')

//สร้างตัวแปรใหม่แต่เอาค่ามาอยู่ด้วยกัน
// let stock = [...product, newProduct];
// console.log("New obj : ", stock);

console.log('----------------------------------------')
    // .length คือเลข id กับ price ที่เป็น numeric

// product[product.length] = newProduct.id;
// product[product.length] = newProduct.price;

newProduct.id = 4;
newProduct.price = 50;

console.log("Add Final Product : ", product);
console.log('----------------------------------------')

//shallow copy
newProduct.price = 100;
console.log(">o< : ", product);