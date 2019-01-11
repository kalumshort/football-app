import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    }

    static navigationOptions = {
        title: 'Teams',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }
    keyExtractor(item, index) {
        return `${index}`;
    }

    

    renderItem({item}) {
        const handlePress = () => {
        this.props.onItemPress(item);
        }
            return(
                <View style={styles.listItem}>
                    <TouchableHighlight  style={styles.listButton}>
                        <>
                            <Text style={styles.buttonText}>Name: {item.name}</Text>
                            {/* <Text style={styles.buttonText}>Rating: {item.rating}</Text> */}
                        </>
                    </TouchableHighlight>
                </View>
        )
    }

    render() {
        return (
            <>
            <FlatList
                data={this.props.players}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
            </>

        );
    }
}
export default List;

const styles = StyleSheet.create({
    listItem:{
        flex: 1,
        alignItems: 'center',
    },
    listButton:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'lightblue',
        width: 300,
        margin:5,
        justifyContent: 'space-between',
    },
    buttonText: {

    },
})