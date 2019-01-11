import React, {Component} from 'react';
// importing all the react native components needed for this page
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
// importing the icons to be used on this page
import Icon from 'react-native-vector-icons/FontAwesome';



class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }
    // keyExtractor thats needed to create a key for the flatlist
    keyExtractor(item, index) {
        return `${index}`;
    }
    // handle delete function that removes the item using its id
    handleDelete = (item) => {
        console.log('deleted');
        console.log(players.id);

        // this.props.handleDelete(this.props.item.id)

    }
    //rendering out each item that has been added to the state
    renderItem({item}) {
         return(
                <View style={styles.listItem}>
                    <TouchableHighlight  style={styles.listButton}>
                        <>
                            <Text style={styles.buttonText}>{item.name}</Text>
                            {/* <Text style={styles.buttonText}>Rating: {item.rating}</Text> */}
                            <Icon style={styles.icon} onPress={ this.handleDelete} name="close"></Icon>
                        </>
                    </TouchableHighlight>
                </View>
        )
    }

    // using flatlist you can easily render out all all items inside an array 
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

//styling for this page
const styles = StyleSheet.create({
    listItem:{
        flex: 1,
        alignItems: 'center',
    },
    listButton:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'blue',
        width: 300,
        margin:5,
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        marginLeft: 21,
        color: 'white',
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 22,
        marginRight: 8,
        color: 'white',
    },
})