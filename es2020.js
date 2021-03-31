const promiseOne = new Promise((resolve, reject) =>
	setTimeout(resolve, 3000))

const promiseTwo = new Promise((resolve, reject) =>
	setTimeout(reject, 3000))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
	.catch(err => console.log('error here', err));

//where promise.all only worked if all promises resolved
//promise.allsettled will check all promises until all promises are dealt with