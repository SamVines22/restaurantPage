document.querySelector("body").appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");t.className="header",t.innerText="The Queen Liz!",e.appendChild(t);const n=document.createElement("div");n.className="left-right",n.innerText="A traditional English pub with good food, fine ales and a warm welcome",e.appendChild(n);const d=document.createElement("div");d.className="left-right";for(let e=0;e<7;e++){let t=document.createElement("div");t.className="day",t.id=`day${e}`,t.innerText="test",d.appendChild(t)}e.appendChild(d);const a=document.createElement("div");return a.className="address",a.innerText="92 Coal Street, London.",e.appendChild(a),e}());