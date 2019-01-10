
import { connect } from 'react-redux';
import List from '../component/List';

import { addPlayer } from '../data/actions/state';


const mapStateToProps = ( state ) => {
    return {
        players: state.players,
    }
};

const mapDispatchToProps = dispatch  => ({
        handleSubmit: data => {
            dispatch(addPlayer(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);