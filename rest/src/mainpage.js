
export default function mainPage() {
    console.log("GIMP");
    const content = document.getElementById("content");
    const middle = document.createElement("div");
    middle.className = "middle";
    const blurb = document.createElement("div");
    blurb.className = "left";
    blurb.innerText = "A traditional English pub with good food, fine ales and a warm welcome";
    middle.appendChild(blurb);
    const hours = document.createElement("div");
    hours.className = "right";
    for (let x = 0; x<7; x++)
    {
        let day = document.createElement("div");
        day.className = "day";
        day.id = `day${x}`;
        let d = document.createElement("div");
        d.className = "d";
        let time = document.createElement("div");
        time.className = "time";
        if (x == 0)
        {
            d.innerText = "Monday";
        }
        if (x == 1)
        {
            d.innerText = "Tuesday";
        }
        if (x == 2) 
        {
            d.innerText = "Wednesday";
        }
        if (x == 3) {
            d.innerText = "Thursday";
        }
        if (x == 4)
        {
            d.innerText = "Friday";
        }
        if (x == 5)
        {
            d.innerText = "Saturday";
        }
        if (x == 6)
        {
            d.innerText = "Sunday";
        }
        time.innerText = "12:30pm - 11:00pm"
        day.appendChild(d);
        day.appendChild(time);
        hours.appendChild(day);
        
    }
    middle.appendChild(hours);
    content.appendChild(middle);
    const footer = document.createElement("div");
    footer.className = "address";
    footer.innerText = "92 Coal Street, London.";
    content.appendChild(footer);
    
    return content;
    
}

