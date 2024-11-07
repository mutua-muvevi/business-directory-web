export const localStorageAvailable = () : boolean => {
	try {
		const key = "Some key";

		window.localStorage.setItem(key, key);
		window.localStorage.removeItem(key);

		return true
	} catch (error) {
		return false
	}
}

export const localStorageGetItem = (key : string, defaultValue = "" )  => {
	const storageAvailable = localStorageAvailable();

	let value;

	if(storageAvailable){
		value = localStorage.getItem(key) || defaultValue;
	}

	return value
}