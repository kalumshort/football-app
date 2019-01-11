import { connect } from 'react-redux';
import Teams from '../component/Teams';


// making that the players are availiable to use as a prop on this page
const mapStateToProps = ( state ) => {
    return {
        players: state.players,
    }
};

export default connect(mapStateToProps, null)(Teams);