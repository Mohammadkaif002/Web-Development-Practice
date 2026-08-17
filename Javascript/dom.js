// getelementsByClasshame
// let p = document.getElementsByClassName("para")
// console.log(p)

// console.log(p[1].innerText);

// console.log(p[2].textContent);

// getElementsByTagName

// HtmlCollection             vs                NodeList
// Doesn't Support foreach.                 Supports foreach.

// Modification
// let p = document.querySelector("para")
// p.textContent="hope"

// 100 button tags
// for (let i = 0; i < 100; i++) {
//   const btn = document.createElement('button');
//   btn.textContent = `Button ${i + 1}`;
//   document.body.appendChild(btn);
// }

// 500 paragraph tags
// for (let i = 0; i < 500; i++) {
//   const p = document.createElement('p');
//   p.textContent = `Paragraph number ${i + 1}`;
//   document.body.appendChild(p);
// }

// 1000 heading tags
// for (let i = 0; i < 1000; i++) {
//   const h = document.createElement('h1');
//   h.textContent = `Heading number ${i + 1}`;
//   document.body.appendChild(h);
// }

// let div2= document.createElement("div")

// let p1 = document.createElement("p1")
// p1.textContent="i love java"
// p1.setAttribute("id","p1")
// p1.setAttribute("class","demo")
// p1.setAttribute("class","jsp")
// p1.setAttribute("class","demo fun") // to overcome this problem use classList
// p1.removeAttribute("id")
// p1.removeAttribute("class")
// console.log(p1);

//? classList
// p1.classList.add("demo")
// p1.classList.add("kaif")


// let h5 = document.createElement("h5")
// h5.textContent="i love sql"
// h5.setAttribute("id","h5")


// let div3 = document.createElement("div")
// div3.textContent="i love javascript"
// div3.setAttribute("id","pdiv3")


// div2.append(p1, h5, div3)
// h5.remove()
// p1.remove()
// document.body.appendChild(div2)

