import img from './elizabethi.png';
export default function header () { 

    const content = document.createElement("div");
    content.id = "content";
    const header = document.createElement("div");
    header.className = "header";
    header.innerText = "The Queen Liz!";
    const liz = new Image();
    liz.src = img;
    liz.id = "liz"; 
    header.appendChild(liz);
    content.appendChild(header);
    
    return content;
    }