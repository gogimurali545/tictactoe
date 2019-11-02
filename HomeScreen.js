import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default HomeScreen = p => {


    return (
        <View style={styles.home}>
            
            <TouchableOpacity 
                style={styles.button}
                onPress={() => p.navigation.navigate('Game', { para1: 'hello', para2: 'murali!' })}>
                <Text style={{color:'white',fontSize:20,fontWeight:'300'}}> LET'S PLAY </Text>    
            </TouchableOpacity>
               
                
            

        </View>

    )

}

HomeScreen.navigationOptions = {
    title: 'Welcome',
    headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        backgroundColor:'blue',
        borderColor:'black',
        borderWidth:1

    }
})







