const CryptoJS = require("crypto-js");
//var data="Example1";//Message to Encrypt
const iv = CryptoJS.enc.Base64.parse(""); //giving empty initialization vector

//var encryptedString = encryptData(data, iv, key);
//console.log(encryptedString);//genrated encryption String:  swBX2r1Av2tKpdN7CYisMg==
let encryptedString;
function encryptData(data, key) {
	if (typeof data == "string") {
		data = data.slice();
		encryptedString = CryptoJS.AES.encrypt(data, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		});
	} else {
		encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		});
	}
	return encryptedString.toString();
}

function decryptData(encrypted, key) {
	var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
}

const MyCrypto = (mode, data, privateKey) => {
	const myKey = CryptoJS.SHA256(privateKey); //hashing the key using SHA256
	console.log("myKey", myKey);
	console.log("data", data);
	console.log("mode", mode);
	const returnData = mode === "encryptData" ? encryptData(data, myKey) : decryptData(data, myKey);

	console.log("MyCrypto-returnData: ", returnData);
	return returnData;
};

export default MyCrypto;
