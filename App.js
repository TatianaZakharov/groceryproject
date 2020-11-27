import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, updateState, ScrollView, View, TouchableHighlight, Dimensions, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        meat: '', 
        snack: '', 
        beverage: '',
        veg: '',
    }
    clearState = () => {
      this.setState({ 
          meat: '',
          snack:'',
          beverage: '',
          veg: '',
      })
  }

    
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
    }));
    
    
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
    }));

    
    render() {
        return (
            <View style={styles.container}>
                
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title1}>
                            Welcome to Shop App!
                        </Text>
                        <Text style = {styles.title2}>
                          Grocery List Organizer
                        </Text>
                    </View>
                </View>
                
                {/*Info page screen layout here*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    < View style={styles.contentContainer}>
                    <ScrollView style = {styles.scrollView}>
                        <Text style={styles.paragraph}>
                            These Are Your Groceries! 
                        </Text>

                        <View style= {styles.cancelBox}>
                          <Text style={styles.cancel}
                         onPress = {this.clearState}
                          >
                            clear 
                           </Text>
                        </View>

                        
                        <View style = {styles.groceries}>
                          <Text style = {styles.food}>
                            Meat
                          </Text>
                          <TextInput style={styles.meat}
                            multiline
                            numberOfLines={8}
                            onChangeText={(meat) => this.setState({meat})}
                            value={this.state.meat}
                            />
                        </View>
                        


                        <View style = {styles.groceries2}>
                          <Text style = {styles.food}>
                            Snack
                          </Text>
                          <TextInput style={styles.snack}
                            multiline
                            numberOfLines={8}
                            onChangeText={(snack) => this.setState({snack})}
                            value={this.state.snack}
                            />
                        </View>



                        <View style = {styles.groceries3}>
                          <Text style = {styles.food}>
                            Beverage
                          </Text>
                          <TextInput style={styles.beverage}
                            multiline
                            numberOfLines={8}
                            onChangeText={(beverage) => this.setState({beverage})}
                            value={this.state.beverage}
                            />
                        </View>



                        <View style = {styles.groceries4}>
                          <Text style = {styles.food}>
                            Vegetable/Fruit 
                          </Text>
                          <TextInput style={styles.veg}
                            multiline
                            numberOfLines={8}
                            onChangeText={(veg) => this.setState({veg})}
                            value={this.state.veg}
                            />
                        </View>
                        </ScrollView> 
                    </View>
                </View>
                

                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleWelcomePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Home Page 
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Make Grocery List 
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDCCC',
    },
    title1: {
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#5D2A42',
    },
    title2: {
      fontSize: deviceHeight/15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FB6376',
    },
    paragraph: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: '#33B4FF',
        fontWeight: 'bold',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: '#FFDCCC',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: 'black',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: '#FB6376',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#90D7FF',
    },
    groceries: {
      width: deviceWidth,
      height: deviceHeight/5, 
      backgroundColor: '#FFDCCC', 
      borderColor: '#FB6376',
      borderWidth: 7,
    },
    groceries2: {
      width: deviceWidth,
      height: deviceHeight/5, 
      backgroundColor: '#FFDCCC', 
      borderColor: '#5D2A42',
      borderWidth: 7,
    },
    groceries3: {
      width: deviceWidth,
      height: deviceHeight/5, 
      backgroundColor: '#FFDCCC', 
      borderColor: '#FB6376',
      borderWidth: 7,
    },
    groceries4: {
      width: deviceWidth,
      height: deviceHeight/5, 
      backgroundColor: '#FFDCCC', 
      borderColor: '#5D2A42',
      borderWidth: 7,
    },
    food: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#33B4FF',
    },
    meat: {
      height: 150,
      borderWidth: 3,
      color: '#5D2A42',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold', 
  }, 
  snack: {
    height: 150,
    borderWidth: 3,
    color: '#5D2A42',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold', 
},
beverage: {
  height: 150,
  borderWidth: 3,
  color: '#5D2A42',
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold', 
}, 
veg: {
  height: 150,
  borderWidth: 3,
  color: '#5D2A42',
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold', 
},
cancelBox: {
  width: 40,
  height: 20, 
  backgroundColor: 'white',
},
cancel: {
  fontSize: 15,
  color: 'black',
  fontWeight: 'bold',
}

});
