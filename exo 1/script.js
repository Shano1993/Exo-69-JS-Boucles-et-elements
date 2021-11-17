
let text = document.getElementById('text');
let list = document.getElementById('liste-commissions');


text.addEventListener("click", function () {
    let user = document.getElementById('usertext').value;
    let newLi = document.createElement('li');
    newLi.innerHTML = user;
    list.appendChild(newLi);
})

let newItem = document.createElement('li');
newItem.innerHTML = "Un truc";
list.appendChild(newItem);
let reset = document.getElementById('reset');
reset.innerHTML = "Supprimer"

function del() {
    newItem.remove();
}

reset.addEventListener('click',del);
