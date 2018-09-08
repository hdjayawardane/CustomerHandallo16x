import React, {Component} from 'react';
import {View, Text , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class CreateMeal extends Component {
    render() {
        return (
            <View> 
            <Text> Create your meal </Text>
            <TouchableOpacity > 
                <Icon  size={30} name="ios-trash" color="red"/> 
                
             </TouchableOpacity>
            </View>


        );
    }



}
export default CreateMeal;