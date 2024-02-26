function firstChar(text) {
  // your code here
	if(text.trim()){
		let s = text.trim();
		return s[0];
	}
	else {
		return '';
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
