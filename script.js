var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var btn = document.createElement("button");
	btn.classList.add("delete");
	btn.appendChild(document.createTextNode("Delete"));
	span.appendChild(document.createTextNode(input.value));
	span.appendChild(document.createTextNode(" "));
	li.appendChild(span);
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	if (event.target.tagName === "SPAN") {
		event.target.classList.toggle("done");
	}
}

function deleteItem(event) {
	if (event.target.tagName === "BUTTON") {
		event.target.closest("li").remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);
ul.addEventListener("click", deleteItem);