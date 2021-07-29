import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {icons} from '../../assets';
const Login = ({navigation}) => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

  return (
    <View style={styles.container}> 
    {/* Logo */}
     <Image style={styles.image} source={require("../../assets/data/logo.png")} />
     <Text style={{color:'black',marginTop:-50,fontSize:28}}>ĐĂNG NHẬP</Text>
      <View style={{width: '90%'}}>
        <Text style={{
            position: 'absolute',
            top: -10,
            textAlign: 'center',
            left: 30,
            zIndex: 1,
            backgroundColor: '#fff',
          }}>
          {' '}
          Email{' '}
        </Text>
        <View style={styles.inputView}>
          <Image style={styles.icon} source={icons.mail} resizeMode="contain" />
          <TextInput style={styles.TextInput}
            onChangeText={email => setEmail(email)}
          />
        </View>
      </View>


      
      <View style={{width: '90%'}}>
        <Text style={{
            position: 'absolute',
            top: -10,
            textAlign: 'center',
            left: 30,
            zIndex: 1,
            backgroundColor: '#fff',
          }}>
          {' '}
          Password{' '}
        </Text>


        <View style={styles.inputView}>
          <Image style={styles.icon} source={icons.lock} resizeMode="contain" />
          <TextInput
            style={styles.TextInput}
            onChangeText={password => setPassword(password)}
          />
        </View>
      </View>


      <TouchableOpacity
        onPress={() => {
        }}>
        <Text style={styles.forgot_button}>Quên mật khẩu ?</Text>
      </TouchableOpacity>


      <TouchableOpacity
         onPress={() => {
        }}>
        <Text style={styles.sms}>SMS</Text>
      </TouchableOpacity>
      

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
        }}>
        <Text style={styles.Btn_Text}>Đăng nhập</Text>
      </TouchableOpacity>


    <TouchableOpacity>
        <Text
          style={{alignItems:'center',marginTop:10}}
          onPress={() => navigation.navigate('Register')}>
          Không có tài khoản ? Đăng ký
        </Text>
      </TouchableOpacity> 
    
        <Text
          style={{alignItems:'center',marginTop:10}}>
            Hoặc
        </Text>

        {/* //facebook */}
        <TouchableOpacity
        style={styles.facebookBtn}
        onPress={() => {
        }}> 
         <Image style={{marginLeft:-300,width: 30, height:30}} source={icons.facebook} />
      </TouchableOpacity>
      <Text style={{color:'white',marginTop:-35}}>Đăng nhập bằng Facebook</Text>

        {/* google */}
        <TouchableOpacity
        style={styles.googleBtn}
        onPress={() => {
        }}> 
         <Image style={{marginLeft:-300,width: 30, height:30}} source={icons.google} />
      </TouchableOpacity>
      <Text style={{color:'black',marginTop:-35}}>Đăng nhập bằng Google</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  icon: {
      width: 20, 
      height: 20,
       tintColor: '#003f5c'
    },
  image: {
      marginTop: 25,
    marginBottom: 60,
    width: 130,
    height: 130,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 5,
    width: '100%',
    height: 55,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  googleBtn:{
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    shadowColor: 'black',
    backgroundColor: '#F0F1F1',
  
  },
  facebookBtn:{
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    shadowColor: 'black',
    backgroundColor: '#1976D2',
  },
sms:{
    marginTop:-28,marginLeft:280
},
  TextInput: {
    height: 50,
    flex: 1,
  },

  forgot_button: {
    height: 30,
    left:-120

  },

  loginBtn: {
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#8B4C39',
  },
  Btn_Text:{
    color: 'white',
   
  }
});

export default Login;
