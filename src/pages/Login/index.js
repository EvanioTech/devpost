import React, {useState}  from "react";
import { View, Text } from "react-native";
import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText } from "./styles";


const Login = () => {
    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const toggleLogin = () => {
        setLogin(!login)
        setName ('')
        setPass ('')
        setEmail ('')
    }


    const handleSgnIn = () => {
        if(email === '' || pass === '') {
            alert('PREENCHA TODOS OS CAMPOS!')
            return;
        }
    }

    const handleSgnUp = () => {
        if(name === '' || email === '' || pass === '') {
            alert('PREENCHA TODOS OS CAMPOS!')
            return;
        }
    }





    if(login) {
        return(
            <Container>
             <Title>
                 Dev<Text style={{color: 'red'}}>Post</Text>
             </Title>
             <Input
             placeholder='seuemail@teste.com'
             value={email}
             onChangeText={(text) => setEmail(text)}
             />
             
     
             <Input
             placeholder='************'
             value={pass}
             onChangeText={(text) => setPass(text)}
             />
     
             <Button onPress={handleSgnIn}>
                 <ButtonText> Acessar</ButtonText>
             </Button>
     
             <SignUpButton onPress={toggleLogin}>
                 <SignUpText>Criar uma conta</SignUpText>
             </SignUpButton>
     
            </Container>
         )

    }
    
    
    return(
       <Container>
        <Title>
            Dev<Text style={{color: 'red'}}>Post</Text>
        </Title>

        <Input
        placeholder='seu Nome'
        value={name}
        onChangeText={(text) => setName(text)}
        />

        <Input
        placeholder='seuemail@teste.com'
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <Input
        placeholder='************'
        value={pass}
        onChangeText={(text) => setPass(text)}
        />

        <Button onPress={handleSgnUp}>
            <ButtonText> Cadastrar</ButtonText>
        </Button>

        <SignUpButton onPress={toggleLogin}>
            <SignUpText>Possuo uma conta</SignUpText>
        </SignUpButton>

       </Container>
       
    )
};


export {Login};