
import React, { Component } from 'react';
 
import { StyleSheet, ImageBackground, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
 
export default class GroceryList extends Component {
 
  constructor(props) {
    
    super(props);
 
    ///creates and inilizes an array (named "this") to nothing 
    this.array = [
    ],
 
      this.state = {
 
        arrayHolder: [],
 
        textInput_Holder: ''
 
      }
 
  }
 
 /// lets user type on data into an array and that info is pushed into the array 
  joinData = () => {
 
    this.array.push({title : this.state.textInput_Holder});
 
    this.setState({ arrayHolder: [...this.array] })
 
  }
 

  /// space between Items 
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  GetItem(item) {
 
    Alert.alert(item);
 
  }
 
 /// style of background and buttons
  render() {
    return (

    
      <ImageBackground source={{ uri: 'https://wizardlyshoe4.s-ul.eu/sRPafkZt.jpg' }} style={{width: '100%', height: '100%'}}>
      <View style={styles.MainContainer}>


    
        <TextInput
          placeholder="Food Item +"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
 
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.buttonText}> Add Food Item </Text>
 
        </TouchableOpacity>
 
        <FlatList
 
          data={this.state.arrayHolder}
 
          width='100%'
 
          extraData={this.state.arrayHolder}
 
          keyExtractor={(index) => index.toString()}
 
          ItemSeparatorComponent={this.FlatListItemSeparator}
 
          renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />
     

       
 
      </View>
      </ImageBackground>

    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
 
  },
 
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
  textInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#f4b860',
    borderRadius: 7,
    marginTop: 12
  },
 
  button: {
 
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#f4b860',
    borderRadius: 8,
    marginTop: 10
  },
 
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
 
});