var getUser = (id, callback) => {
	var user = {
		id,
		nane: 'Vikram'
	};

	setTimeout(() => {
		callback(user);
	}, 3000)

};

getUser(31, (user) => {
	console.log(user);
})