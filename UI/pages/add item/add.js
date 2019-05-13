
const itemimage = document.querySelector('[name=itemimage]').value;
const itemprice = document.querySelector('[name=itemprice]').value;
const describeitem = document.querySelector('[name=describeitem]').value;

function addItem(){

    let container = document.querySelector("grid-container");
    let f = document.getElementById('f');
    let div = document.createElement("div");
    div.setAttribute("id", f.value );
    div.appendChild(document.createTextNode(f.value));
    container.appendChild(div);
}