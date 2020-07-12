var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementById("delete");

function inputValue() {
    return input.value.length
}


function addNewList() {
    var li = document.createElement("li");
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("Delete!"));
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(newButton);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputValue() > 0) {
        addNewList();
    }
}

function addListAfterKeypress(event) {
    if (inputValue() > 0 && event.keyCode === 13) {
        addNewList();
    }   
}

button = addEventListener("click", addListAfterClick)


input.addEventListener("keypress", addListAfterKeypress)
 
del = addEventListener("click", function(){
    ul.removeChild(li);
})
