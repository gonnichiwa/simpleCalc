


function caculate(){
	var inputTag1 = Number(document.getElementById('input1').value);
	var inputTag2 = Number(document.getElementById('input2').value);

	console.log("inputTag1 : " + inputTag1);
	console.log("inputTag2 : " + inputTag2);
	var target = document.getElementById('operators');

	var op = target.options[target.selectedIndex].value;

	console.log("operator : " + op);
}