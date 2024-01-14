export default function contact() {
const content = document.getElementById("content");
const middle = document.createElement("div");
middle.className = "middle";
middle.innerText = "Contact our friendly team on 01535-58923423";
content.appendChild(middle);
const footer = document.createElement("div");
    footer.className = "address";
    footer.innerText = "92 Coal Street, London.";
    content.appendChild(footer);
return content;
}