import React, {Component} from 'react';
import startMainTabs from '../MainTabs/startMainTabs'
import {View , Text, Button, StyleSheet, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';








class Signup extends Component {

    state = {
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength : 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                equalTo: 'password'
                }
            }

        }



    };





    
  //accountCreatedHandler = () => {
    //    startMainTabs();
    
    
   // } 

    constructor(props) {
      super(props);
      this.state = {
          username: '',
         // username: '',
         // email: '',
         // phoneno: '',
          //password: '' 
      }
  }


  login = () => {
      fetch('https://handallo-66656.firebaseio.com', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify({
              username: this.state.controls.email.value,
              //username: this.state.username,
              //email: this.state.email,
              //phoneno: this.state.phoneno,
              //password: this.state.password 
          })
      })

          .then((response) => response.json())
          .done();
  }
  
  


    render() {
        return (
            

            
            // <View> 
            // <Text> Sign Up</Text>

            // </View>


    //     );
    // }


<KeyboardAvoidingView behavior="padding" style={styles.wrapper} >
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Handallo</Text>
            <TextInput 
            placeholder="Username" 
            placeholderColor="#c4c3cb" 
            style={styles.loginFormTextInput} 
            value={this.state.controls.email.value}
            onChangeText={(text) => this.setState({input: text})}
            
            />

            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="Confirm Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button title="Sign Up" onPress={this.login}/>

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
    //flex: 1,

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


export default Signup;