export default function menu() {
console.log("menu");
const content = document.getElementById("content");
const middle = document.createElement("div");
middle.className = "middle";
const left = document.createElement("div");
left.className = "leftM";
for (let x = 0; x< 5; x++) {
    let item = document.createElement("div");
    item.className = "item";
    let price = document.createElement("div");
    price.className = "price";
    left.appendChild(item);
    left.appendChild(price);
    if (x == 0) {
        item.innerText = "Food Menu";
        item.id = "head";
        price.id = "head";
    } 
    if (x == 1) {
        item.innerText = "Steak and Ale Pie";
        price.innerText = "$ 14.00";
    }
    if (x==2) {
        item.innerText = "Bangers and Mash";
        price.innerText = "$ 12.00";
    }
    if (x ==3) {
        item.innerText = "Roast Chicken and Chips";
        price.innerText = "$ 13.50";
    }
    if (x == 4) {
        item.innerText = "Toad in the Hole";
        price.innerText = "$ 14.00";
    }
}
middle.appendChild(left);
const right = document.createElement("div");
right.className = "rightM";
for (let x = 0; x<5; x++) {
    let item1 = document.createElement("div");
    item1.className = "item";
    let price1 = document.createElement("div");
    price1.className = "price";
    if (x == 0){
        item1.innerText = "Drinks";
        item1.id = "head";
        price1.id = "head";
    }
    if (x == 1) {
        item1.innerText = "Spitfire";
        price1.innerText = "$ 4.00";
    }
    if (x == 2) {
        item1.innerText = "Bass";
        price1.innerText = "$ 4.00";
    }
    if (x == 3) {
        item1.innerText = "Carling";
        price1.innerText = "$ 4.00";
    }
    if (x == 4) {
        item1.innerText = "Lemonade";
        price1.innerText = "$ 2.50";
    }
    right.appendChild(item1)
right.appendChild(price1);
}

middle.appendChild(right);
content.appendChild(middle);
const footer = document.createElement("div");
    footer.className = "address";
    footer.innerText = "92 Coal Street, London.";
    content.appendChild(footer);

return content;
}