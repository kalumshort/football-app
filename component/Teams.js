import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';


// A function that takes an array and randomly distributes the items inside
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}


class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    }
    // setting and styling the header
    static navigationOptions = {
        title: 'Teams',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }
    // key extractor creates a key thats needed for the FlatList to function
    keyExtractor(item, index) {
        return `${index}`;
    }


    
    // rendering each item individually for the flatlist the display
    renderItem({item}) {
        return(
                <View style={styles.listItem}>
                    <TouchableHighlight  style={styles.listButton}>
                        <>
                            <Text style={styles.buttonText}>{item.name}</Text>
                            {/* <Text style={styles.buttonText}>Rating: {item.rating}</Text> */}
                        </>
                    </TouchableHighlight>
                </View>
        )
    }

    render() {
        // setting random array to be the array of my players but also running the shuffle function to mix up the order
        let randomArray = shuffle(this.props.players);

        return (
            <View style={styles.container}>
                <Text style={styles.TeamText}>Team 1</Text>

                {/* using two flatlist with both of them slicing the random array to split the array into two different team */}
                <FlatList
                    style={styles.FlatList}
                    data= { randomArray.slice(0,5) }
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
                <Text style={styles.TeamText}>Team 2</Text>
                <FlatList
                    style={styles.FlatList}
                    data= { randomArray.slice(5,10) }
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>

        );
    }
}
export default List;

// Styling for this page
const styles = StyleSheet.create({
    container: {
    },
    FlatList: {

    },
    listItem:{
        flex: 1,
        alignItems: 'center',
    },
    listButton:{
        padding: 10,
        backgroundColor: 'blue',
        width: 300,
        margin:5,
        justifyContent: 'space-between',
        borderRadius: 12,


    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,

    },
    TeamText: {
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: 'lime',
        marginTop: 20,
        margin: 10,
        padding: 8,
        fontWeight: 'bold',
        fontSize: 16,
        
    },
})