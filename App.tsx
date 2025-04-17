import { Text, SafeAreaView, StyleSheet,Image, TextInput,Pressable, View} from 'react-native'
import {useState} from 'react'
import User from './component/User'
import ResetPassword from './component/ResetPassword'

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [islogged, setLogged] = useState(false)
  const [user, setUser] = useState(false)

  const handleLogin = () => {
    if (email === "admin@admin.com" && password === "1234") {
      alert("Login successful")
      setLogged(true)
      setEmail("")
      setPassword("")
    }else if(email === "user@gmail.com" && password === "12345"){
      alert("Welcome Jovêncio")
      setUser(true)
      setLogged(true)
      setEmail("")
      setPassword("")
    } else {
      alert("Login failed")
    }
  }

  const handleLogout = () => {
    setUser(false)
    setLogged(false)
  }
  
  return (
      <SafeAreaView >
      {!islogged && !user ? (
        <View style={styles.container}>
          <Image style={styles.image} source={require("./assets/snack-icon.png")}/>
          <Text style={styles.title}>Sistema de Login</Text>
          <Text style={styles.subtitle}>Bem vindo(a)! Digite seus dados abaixo.</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input} 
            placeholder={"Digite seu email"}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input} 
            placeholder={"*****************"}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
          <Pressable style={styles.forgottenPassword}>Esqueci minha senha</Pressable>
          <Pressable style={styles.login} onPress={handleLogin} ><Text style={styles.textLogin} >Entrar</Text></Pressable>
          <Text style={styles.footer}>Não tem uma conta?<Pressable style={styles.register}>Cadastre-se</Pressable></Text>
          <Text style={styles.creator}>Criado por Jovêncio Sigma da Bahia</Text>
        </View>
      ): user ? (
          <User onLogout={handleLogout}  />
      ):(
        <View >
        </View>
      )}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
      width:'100%',
      height:'100%',
    },
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    },
    image:{
      width: '10rem',
      height: '10rem',
      marginTop: 20
    },
    title:{
      fontWeight:'bold',
      fontSize: 25,
      marginVertical: 5,
    },
    subtitle:{
      color: '#999',
      fontSize: 15,
      fontWeight: 400,
    },
    label:{
      alignSelf: 'flex-start',
      marginLeft: 20,
      color: '#777',
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5
    },
    input:{
      borderRadius: 5,
      borderColor: '#777',
      width: '90%',
      height: '7%',
      color:'#999',
      borderWidth: 2,
      padding:7,
    },
    forgottenPassword:{
      color:'#4162b7',
      fontSize: 15,
      fontWeight:'bold',
      alignSelf: 'flex-end',
      marginRight: 20,
      marginVertical: 20,
    },
    login:{
      backgroundColor:'#4162b7',
      width: '90%',
      padding: 10,
      borderRadius: 5,
    },
    textLogin:{
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
    },
    footer:{
      color:'#777',
      fontWeight: 'bold',
      marginVertical:20
    },
    register:{
      color:'#4162b7',
    },
    creator:{
      fontSize:11,
      color:'#777'
    }
})
