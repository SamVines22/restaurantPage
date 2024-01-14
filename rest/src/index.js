//import img from './elizabethi.png';
import './style.css';
import mainPage from './mainpage.js';
import header from './header.js';
import menu from './menu.js';
import contact from './contact.js';


function links() {
    const link = document.getElementById("links");
    for (let x = 0; x <3; x++)
    {
        let btn = document.createElement("button");
        btn.id = `btn${x}`;
        btn.className = "nav";
        if (x == 0)
        {
            btn.innerText = "Home";
        }
        if (x == 1)
        {
            btn.innerText = "Menu";
        }
        if (x == 2)
        {
            btn.innerText = "Contact Us";
        }
        link.appendChild(btn);
    }
    return link;
}

document.querySelector("body").appendChild(links());
document.querySelector("body").appendChild(header());
document.querySelector("body").appendChild(mainPage()); 


document.getElementById("btn0").onclick = function(){
    for (let x = 0; x<3; x++)
    {
        let btn = document.getElementById(`btn${x}`)
        if (x == 0){
            btn.style.backgroundColor = "yellow";
        }
        else {
            btn.style.backgroundColor = "#f0f0f0";
        }
    }
    let content = document.getElementById("content");
    document.querySelector("body").removeChild(content);
    document.querySelector("body").appendChild(header());
    document.querySelector("body").appendChild(mainPage());
};

document.getElementById("btn1").onclick = function() {
    for (let x = 0; x<3; x++)
    {
        let btn = document.getElementById(`btn${x}`)
        if (x == 1){
            btn.style.backgroundColor = "yellow";
        }
        else {
            btn.style.backgroundColor = "#f0f0f0";
        }
    }
    let content = document.getElementById("content");   
    document.querySelector("body").removeChild(content);
    document.querySelector("body").appendChild(header());
    document.querySelector("body").appendChild(menu());
    
}

document.getElementById("btn2").onclick = function() {
    for (let x = 0; x<3; x++)
    {
        let btn = document.getElementById(`btn${x}`)
        if (x == 2){
            btn.style.backgroundColor = "yellow";
        }
        else {
            btn.style.backgroundColor = "#f0f0f0";
        }
    }
    let content = document.getElementById("content");   
    document.querySelector("body").removeChild(content);
    document.querySelector("body").appendChild(header());
    document.querySelector("body").appendChild(contact());
};


