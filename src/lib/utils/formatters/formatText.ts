// Remove all spaces from a string
export const removeSpaces = (str: string) => {
   return str.replaceAll(' ', '')
};

// Capitalize first letter of each word in string
export const titleCase = (str:string) => {
	let splitStr = str.toLowerCase().split(' ');
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}

// Capitalize first letter of string
export const firstLetterCase = (string:string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}