
// creating a reducer that modifies the state by the instructions i tell it
let id = 0 
function reducer ( currentState, action ) {
    switch(action.type) {
        //the addPlayer case retrieves the current state then creates another item inside the array with the info i tell it to have 
        case 'addPlayer': {
            id =+ 1
            return {
                //copying state
                ...currentState,
                //creating a players array 
                players: [{
                //adding the name equal to the name passed from the input component
                    name: action.payload,
                    id: id
                // finally getting the previous items and adding them on the back
                },...currentState.players]
            }
        }
        case 'deletePlayer': {
            return {
                ...currentState,
                players: state.players.filter(player => player.id !== action.id),

            }
        }
        default: {
            return currentState;
        }
    }
}

export default reducer;
