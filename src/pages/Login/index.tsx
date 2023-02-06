import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ButtonBack, ButtonLogin, Container, Content, Input, Titulo, ViewInput, Texto } from './styles';
import themes from '../../themes';
import firebase from '../../connect';
import { useDispatch } from 'react-redux';
import { setLogin, setState } from '../../store/store';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/types';

export function Login() {

    const dispatch = useDispatch();
    const navigation = useNavigation<propsStack>();
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusSenha, setFocusSenha] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [erro, setErro] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const FocusEmail = (e: any) => {
        e?.onFocus;
        setFocusEmail(true);
    }
    const BlurEmail = (e: any) => {
        e?.onBlur;
        setFocusEmail(false);
    }
    const FocusSenha = (e: any) => {
        e?.onFocus;
        setFocusSenha(true);
    }
    const BlurSenha = (e: any) => {
        e?.onBlur;
        setFocusSenha(false);
    }

    function Login(email:string, senha:string) {
        setIsLogin(true)
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((user) => {
            firebase.firestore().collection('Usuarios').where('uid', '==', user.user?.uid)
            .get().then((query) => {
                // console.log('Achou');
                query.forEach((data) => {
                    dispatch(setLogin({     ...data.data() }));
                    dispatch(setState(true));
                }) 
            })
            setIsLogin(false)
            navigation.goBack();
        }).catch(() => {setErro(true), setIsLogin(false)})
    }

    return (
        <Container>
            <ButtonBack>
                <Ionicons name='arrow-back' size={32} color={themes.colors.CONTRASTE} />
            </ButtonBack>
            <Content>
                <Titulo>Log In</Titulo>
                <View style={{ paddingVertical: 64 }}>
                    <ViewInput style={{ 
                        borderColor: focusEmail ? themes.colors.DESTAQUE : themes.colors.CONTRASTE, 
                        opacity: focusEmail ? 1 : .5 
                    }}>
                        <Ionicons name='person-outline' size={24} color={themes.colors.CONTRASTE} />
                        <Input 
                            placeholder='Email'
                            onFocus={FocusEmail}
                            onBlur={BlurEmail}
                            onChangeText={(event) => setEmail(event)}
                            placeholderTextColor={themes.colors.CONTRASTE}
                        />
                    </ViewInput>
                    <ViewInput style={{ 
                        borderColor: focusSenha ? themes.colors.DESTAQUE : themes.colors.CONTRASTE, 
                        opacity: focusSenha ? 1 : .5 
                    }}>
                        <Ionicons name='lock-closed-outline' size={24} color={themes.colors.CONTRASTE} />
                        <Input 
                            placeholder='Senha'
                            onFocus={FocusSenha}
                            onBlur={BlurSenha}
                            secureTextEntry
                            onChangeText={(event) => setSenha(event)}
                            placeholderTextColor={themes.colors.CONTRASTE}
                        />
                    </ViewInput>
                    {erro ? 
                        <Text style={{ fontSize: 12, color: themes.colors.COMPLEMENTAR }}>
                            Aldo deu errado. Verifique o email e a senha.
                        </Text>
                    : null}
                </View>

                <View>
                    <ButtonLogin onPress={() => Login(email, senha)}>
                        {isLogin ? 
                            <ActivityIndicator size='large' color={themes.colors.CONTRASTE} />
                        :
                            <Texto>Log In</Texto>
                        }
                    </ButtonLogin>
                    <View style={{ alignItems: 'center', opacity: .7, marginTop: 12 }}>
                    <Texto style={{ fontSize: 14 }}>Não tem cadastro? Cadastre-se</Texto>
                    </View>
                </View>
            </Content>
        </Container>
    );
}