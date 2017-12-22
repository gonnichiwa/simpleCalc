function plus(input1,input2){
	var resultNumber = input1 + input2;
	return resultNumber;
}

function caculate(){
	/* 

	*/
	var inputTag1 = getValueOfTag('inputTag1');
	var inputTag2 = getValueOfTag('inputTag2');
	// var inputTag1 = Number(document.getElementById('input1').value);
	// var inputTag2 = Number(document.getElementById('input2').value);
	var target = document.getElementById('operators');
	var op = target.options[target.selectedIndex].value;
	var numOp = Number(op);
	/*

	*/
	var result = 99999999999;
	if(numOp == 1){
		result = plus(inputTag1,inputTag2);
	} else if (numOp == 2 ){
		result = minus(inputTag1,inputTag2);
		// result = inputTag1 - inputTag2;
	} else if (numOp == 3){
		result = multiple(inputTag1,inputTag2);
		// result = inputTag1 * inputTag2;
	} else if (numOp == 4){
		result = division(inputTag1,inputTag2);
		// result = inputTag1 / inputTag2;
	}
	/**

	*/
	document.getElementById('result').innerHTML = result;
}