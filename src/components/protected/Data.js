import { ref } from '../../config/constants'

export function getUsers () {
	var talentItems = [];
	var talentRef = ref.child('future');
		talentRef.once("value", function(snapshot) {
			snapshot.forEach((child)=> {
				var data = {	
					'artist': child.val().artist,
					'author': child.val().author,
					'projectTitle': child.val().projectTitle,
					'text': child.val().text
			};
				talentItems.push({data})
			})
			console.log(JSON.stringify(talentItems));
			console.log(talentItems[0].data.artist);
			return talentItems;
		}, function (error) {
			console.log("Error: " + error.code);
		});
}