const Encrypter = (data) => {

	let arrayName = [...data];  

	const stringEncrypted = {
		"e" : "enter",
		"i" : "imes",
		"a" : "ai",
		"o" : "ober",
		"u" : "ufat"    
	};

	for (let i = 0; i <= arrayName.length; i++) {
		let str = arrayName[i] 
		if(stringEncrypted[str]) {
			arrayName[i] = stringEncrypted[str]
		}
	};

	let dataEncrypted = arrayName.join("");
	
	return dataEncrypted;
};    


export default Encrypter;