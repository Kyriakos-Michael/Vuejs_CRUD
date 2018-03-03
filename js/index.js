let people = [
	{
		name: 'Lewi',
		age: 23,
		traits: ['Happy', 'Weird']
	},
	{
		name: 'Jessie',
		age: 21,
		traits: ['Nerd', 'Awesome', 'Psychic']
	}
]

let app = new Vue({
  el: '#app',
  data: {
		showPerson: false,
    people: people,
		newPerson: {
			traits: []
		}
  },
	methods: {
		toggleAddPerson: ()=> {
			app.showPerson = app.showPerson ? false : true;
		},
		hideAddPerson: ()=>{
			app.showPerson = false;
		},
		showAddPerson: ()=>{
			app.showPerson = true;
		},
		addPerson: ()=>{
			let person = app.newPerson;
			
			app.people.push(person);
			app.hideAddPerson();
			app.resetNewPerson();
		},
		resetNewPerson: ()=>{
			app.newPerson = {
				traits: []
			};
		},
		addTrait: ()=> {
			var trait = app.newPerson.traitField

			if(trait.length){
				app.newPerson.traits.push(trait);
				app.newPerson.traitField = null;
			}
    },
		deleteNewPersonTrait: (index)=>{
			app.newPerson.traits.splice(index, 1);
		},
		editPerson: (index)=>{
			app.newPerson = app.people[index];
			app.people.splice(index, 1);
			app.showAddPerson();
		},
		deletePerson: (index)=>{
			app.people.splice(index, 1);
		}
  }
});