import React, { useState } from "react"; // Importa React e o hook useState
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; //Importa componentes basicos do react native

// Função principal do aplicativo 
const App = () => {
  // estados para armazenar o nome o usuário e a senha
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
}
// Função que é chamada quando o botão login é pressionado
const handleLogin = () => {
  //Aqui daria pra adicionar lógica para autenticar o usuário
  alert(`Usuário: ${username}?\nSenha: ${password}`); // Exibe um alerta com as credenciais

}

return(
  //Container principal que centraliza o conteúdo
  <View style ={styles.container}>
    <Text style={styles.title}>Tela de Login</Text>
    <TextInput
      style={styles.input}
      placeholder= "Nome de usuário"
      value={username}
      onChangeText={setUsername} //Atualiza o estado do nome de Usuário   
    />
  <TextInput
      style={styles.input}
      placeholder= "Senha"
      secureTextEntry {true} //Esconde o texto digitado
      value={password}
      onChangeText={setPassword} //Atualiza o estado da senha   
    />
    <Button title= "Entrar" onPress={handleLogin}/> {/* Botão de login */}

  </View>

);

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar toda a altura da tela
    justifyContent: 'center', //Centraliza os itens verticalmente
  }
})