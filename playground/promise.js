var asyncAdd = (a, b) => {
	return new Promise((resolve, reject ) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b)
			} else {
				reject('Stop. You know those aint numbers.')
			}
		}, 1500) 
	})
}

asyncAdd(5, '2').then((res) => {
	console.log('Result: ', res)
	return asyncAdd(res, 33)
}).then((res) => {
	console.log('Should be 45 but is ', res)
}).catch((errorMessage) => {
	console.log(errorMessage)
})

var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('unable to fulfill promise')
	}, 2500)
});

somePromise.then((message) => {
	console.log('Success: ', message);
	}, (errorMessage) => {
	console.log('Error: ', errorMessage)
});