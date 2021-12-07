import { showProduct } from "./product-list.js";
import { products } from './products.js';

let toggle = false;
const active = document.querySelector('#active'); // ปุ่ม search
const searchValue = document.querySelector('#searchValue'); // ช่องsearch

document.getElementById('search').addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
        let item = [];
        active.setAttribute('style', 'display: block; ');
        searchValue.setAttribute('style', 'display: block;');
        active.addEventListener("click", () => {
            (!(item.length)) ? showProduct(products): showProduct(item);
        })
        searchValue.addEventListener('keyup', () => {
            let value = new RegExp(String(searchValue.value), 'i') //เป็นการทำให้เวลาเราพิมลงไปในช่องsearch ถ้ามี keyword ก็จะเจอเลย
            item = products.filter((p) => { return p.name.match(value) != null; }) //เป็นการเอาของใน products ออกมาด้วยตัวแปร p ถ้าชื้อสินค้าตรงกับสิ่งที่พิมก็จะแสดง item 
            if (searchValue.value.length === 0) { showProduct(products) } //ถ้าช่องsearch ว่าง จะแสดงproducts ทั้งหมด
        })
    } else {
        active.setAttribute('style', 'display: none;');
        searchValue.setAttribute('style', 'display: none;');
    }

})