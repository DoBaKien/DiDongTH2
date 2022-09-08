import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {

  const [userName, setUserName] = React.useState("");
  const [passWord, setPassWord] = React.useState("");

  function callFunctionJs() {

    if(userName == "Abc123" && passWord == "123456"){
      console.log('Dang nhap thanh cong');
      Alert.alert(
       `Thành công ${userName}`
     )
    }
    else{
      console.log('Dang nhap khong thanh cong');
      Alert.alert(
        `sai ${userName}`
      )
    }

  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder='User name' style={styles.txtip} onChangeText={(e) => setUserName(e)}></TextInput>
      <TextInput placeholder='Password'style={styles.txtip} secureTextEntry={true} onChangeText={(e) => setPassWord(e)}></TextInput>
      
      <Button title='Login' onPress={callFunctionJs}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtip: {
    borderColor: '#000000',
    borderWidth: 3,
    height: 40,
    margin: 12,
    padding: 10, 
    width: 300,
  }
});