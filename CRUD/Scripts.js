//get Total
// Ceat Products
// Save Local Storege
// Clear inputs
// Read
// Count
// Delete
// Update
// Search
// Clean Data

let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

//get Total
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background= '#000'
        total.style.color= '#fff'
    }else{
        total.style.background= 'none'
        total.style.color = 'black'
        color: $secColor;
    }
}