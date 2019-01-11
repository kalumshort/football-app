import { connect } from 'react-redux';
import NewPlayerInput from '../component/Input';
import { addPlayer } from '../data/actions/state';

const mapStateToProps = ({ input }) => ({ input });

// dispatch that takes the data given and sends it to the reducer 
const mapDispatchToProps = dispatch => ({
    handleSubmit: data => {
        dispatch(addPlayer(data))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(NewPlayerInput);