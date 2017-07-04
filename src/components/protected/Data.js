import { ref } from '../../config/constants'

export function getData () {

	var talentRef = ref.child('future');
	return talentRef.once("value", function(snapshot) {
		return snapshot;
	}).then(function(snapshot) {

		let talentItems = [];

		snapshot.forEach((child)=> {
			var data = {	
				'artist': child.val().artist,
				'author': child.val().author,
				'projectTitle': child.val().projectTitle,
				'text': child.val().text
			};

			talentItems.push(data);
		});
			
		return talentItems;
	}).catch(function(error) {
		console.log("Error: " + error.code);
	});
}