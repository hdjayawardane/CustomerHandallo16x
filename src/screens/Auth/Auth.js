import React, {Component} from 'react';
import {View , Text, Button, StyleSheet, TouchableWithoutFeedback,TouchableOpacity,  TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'
import Signup from '../Signup/signup';
import Icon from 'react-native-vector-icons/Ionicons';


class AuthScreen extends Component {


    state = {
        controls: {
            

        }



    };


    loginHandler = () => {
             startMainTabs();
    }
    SignupHandaler = () => {
            
            this.props.navigator.push({
                screen: 'app.Register',
                title: 'Create an account'
              });
    }

    onFbLoginPressHandler = () => {
             
        this.props.navigator.push({
            screen: 'app.LoginWithFB',
            title: 'Login with Facebook'
        });



    }


    render  () {
        return(
            // <View>
            //     <Text> Auth Screen</Text>
            //     <Button title="Login" onPress={this.loginHandler}/>
            // </View>






//         );
        



//     }
// }

<KeyboardAvoidingView behavior="padding" style={styles.wrapper} >
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Handallo</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            
            <Button title="Login" onPress={this.loginHandler}/>
            
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPressHandler()}
              title="Login with Facebook"
              
              color="#3897f1"
            />
            <Text> New to Handallo?</Text>
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.SignupHandaler()}
              title="Create an account"
              color="#3897f1"

            />
            <TouchableOpacity > 
                <Icon  size={30} name="ios-trash" color="red"/> 
                
            </TouchableOpacity>



        </View>
        </View>
      </TouchableWithoutFeedback>
        
     
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize :38,
    color: '#fff',
    fontWeight: 'bold',
  },
  loginScreenContainer:{
    flex: 1,

  },

  loginFormView: {
    flex: 1,

  },

  logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',

  },

  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,


  },


  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,


  },

  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
     
});



export default AuthScreen;