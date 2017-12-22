function caculate(){
	var inputTag1 = getValueOfTag('input1');
	var inputTag2 = getValueOfTag('input2');
	var numOp = getOptionValue('operators');

	// console.log("numOp : " + numOp);
	// console.log("inputTag1 : " + inputTag1 + ", typeof : " + typeof inputTag1);
	// console.log("inputTag2 : " + inputTag2 + ", typeof : " + typeof inputTag2);

	var result = 99999999999;
	if(numOp == 1){
		result = plus(inputTag1,inputTag2);
		console.log("result in if : " + result);
	} else if (numOp == 2){
		result = minus(inputTag1,inputTag2);
	} else if (numOp == 3){
		result = multiple(inputTag1,inputTag2);
	} else if (numOp == 4){
		result = division(inputTag1,inputTag2);
	}

	// console.log("result typeof : " + result);

	printResult('result',result);
}