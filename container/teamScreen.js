import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight, FlatList} from 'react-native';

class TeamScreen extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>teams</Text>
            </View>
        );
    }

}

export default TeamScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    }
})