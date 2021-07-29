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


const Register = ({navigation}) => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

  return (
    <View style={styles.container}> 
    {/* Logo */}
     <Image style={styles.image} source={require("../../assets/data/logo.png")} />
     <Text style={{color:'black',marginTop:-50,fontSize:20}}>ĐĂNG KÝ</Text>
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
          Họ và tên{' '}
        </Text>
        <View style={styles.inputView}>
          <Image style={styles.icon} source={icons.profile} resizeMode="contain" />
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
          Email{' '}
        </Text>
        <View style={styles.inputView}>
          <Image style={styles.icon} source={icons.mail} resizeMode="contain" />
          <TextInput
            style={styles.TextInput}
            onChangeText={password => setPassword(password)}
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
          Số điện thoại{' '}
        </Text>
        <View style={styles.inputView}>
          <Image style={styles.icon} source={icons.phone} resizeMode="contain" />
          <TextInput
            style={styles.TextInput}
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
          Mật khẩu{' '}
        </Text>
        <View style={styles.inputView}>
          <Image style={styles.icon} source={icons.lock} resizeMode="contain" />
          <TextInput
            style={styles.TextInput}
            onChangeText={password => setPassword(password)}
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
          Nhập lại mật khẩu{' '}
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
        style={styles.loginBtn}
        onPress={() => {
        }}>
        <Text style={styles.Btn_Text}>Đăng ký</Text>
      </TouchableOpacity>


    <TouchableOpacity>
        <Text
          style={{alignItems:'center',marginTop:10}}
          onPress={() => navigation.navigate('Login')}>
          Đã có một tài khoản? Đăng nhập
        </Text>
      </TouchableOpacity> 
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
    width: 120,
    height: 120,
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

export default Register;
