import { Box, Button, FormControl, Image, Input, Link, Text, VStack, useToast } from 'native-base';
import Logo from '../src/assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useEffect, useState } from 'react';
import { login } from './services/Autenticacao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const toast = useToast();

  useEffect(() => { 
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('Tabs');
      }
    }
    verificarLogin();
  }, []);

  async function handleLogin() {  
    const  response = await login(email, senha);
  
    if (response) {
      
      const { token } = response;
      AsyncStorage.setItem('token', token);
      const tokenDecodificado = jwtDecode(token) as any;
      const pacienteId = tokenDecodificado.id;
      AsyncStorage.setItem('pacienteId', pacienteId); 


      navigation.navigate('Tabs');
    } else {  
      toast.show({
        title: 'Credenciais inválidas',
        description: 'O e-mail ou a senha estão incorretos.',
        backgroundColor: 'red.500',
        placement: "top"

        
      });
    }

  }

  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} p={5}>
      <Image source={Logo} alt="Logo VollMed" />

      <Titulo>Faça login em sua conta</Titulo>

      <Box>
        <EntradaTexto 
          label={'E-mail'} 
          placeholder={'Digite seu e-mail'} 
          value={email} 
          onChangeText={setEmail} 
        />
        
        <EntradaTexto 
          label={'Senha'} 
          placeholder={'Digite sua senha'} 
          secureTextEntry={true} 
          value={senha} 
          onChangeText={setSenha} 
        />
      </Box>

      <Botao onPress={handleLogin}>Entrar</Botao>

      <Link href='https://google.com' m={2}>Esqueceu sua senha?</Link>

      <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={8}>
        <Text>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color={'blue.500'} ml={1}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}

