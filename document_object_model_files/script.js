var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteButton = document.getElementById("delete");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  checkbox.addEventListener("click", function() {
    li.classList.toggle("done");
  })
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeydown(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function removeCompleteListItems() {
  var liToRemove = document.getElementsByClassName("done");

  while(liToRemove[0]) {
    liToRemove[0].remove();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);

deleteButton.addEventListener("click", removeCompleteListItems);