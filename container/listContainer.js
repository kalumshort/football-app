
import { connect } from 'react-redux';
import List from '../component/List';

const mapStateToProps = ( state ) => {
    return {
        players: state.players,
    }
};

const mapDispatchToProps = dispatch  => ({
        handleDelete: data => {
            dispatch(deletePlayer(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);