import { getPlayers } from "./actions/state";
import { addPlayer } from './actions/state';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addPlayer': return addPlayer(state, action);
        default : return state;
    }
}
export default reducer;

