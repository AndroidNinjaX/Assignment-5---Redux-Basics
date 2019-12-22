const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CREATE_PERSON') {
        console.log('you clicked the button');
        //If I click on the button "Add Person" then
        //Create a newPerson
        const newPerson = {
            id: Math.random(),
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        console.log('Herer is your newPerson:');
        console.log(newPerson);
        //Distribute the elements of the current array, and add the new person.
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    return state;
}

export default reducer;