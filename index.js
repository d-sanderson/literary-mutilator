
function tier1Challenge() {
	document.getElementById("one").style.fontFamily = "monospace";
	document.getElementById("one").style.color= "red";
	document.getElementById("one").style.fontWeight="bold";
	document.getElementById("one").style.backgroundColor="yellow";
}


function replaceAnd(){
	let catPara = document.getElementById("two");
	let regex = /and/g;
	catPara.innerHTML = catPara.innerHTML.replace(regex, 'MOARCATFOODNOW!')

}

//HTML5 Drag n Drop Events

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

//fetch api request

fetch('https://jsonplaceholder.typicode.com/todos/5')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		let toDoTitle = (myJson['title']);
		let titlePara = document.createElement('h1');
		titlePara.innerHTML = "The following is text from a fetch request " + toDoTitle;
		document.body.appendChild(titlePara);
	});
