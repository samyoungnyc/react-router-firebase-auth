import { ref } from '../../config/constants'

export function getUsers () {
	var users = {};
	var userRef = ref.child('future');
		userRef.on("child_added", function(snapshot) {
			users = snapshot.val().artist;
			console.log("Artist Name: " + users);
			return users;			
		}, function (error) {
			console.log("Error: " + error.code);
		});
}
