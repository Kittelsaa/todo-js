

var input = document.querySelector("#added-input");
var btn = document.querySelector("#added-btn");
var added = document.querySelector(".added");




function addItem(){
    added.innerHTML += '<li> '+input.value+' <button onclick="deleteItem(this);" class="delete">delete</button> </li>';
    input.value="";
}
function deleteItem(k){
    k.parentNode.remove();
}




btn.addEventListener("click", addItem);


























