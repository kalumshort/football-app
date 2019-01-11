
import { connect } from 'react-redux';
import List from '../component/List';
// making players a prop to be used inside the list component
const mapStateToProps = ( state ) => {
    return {
        players: state.players,
    }
};
// making handleDelete dispatch a fuction, that function is a action that the reducer can use with the data passed in 
const mapDispatchToProps = dispatch  => ({
        handleDelete: data => {
            dispatch(deletePlayer(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);