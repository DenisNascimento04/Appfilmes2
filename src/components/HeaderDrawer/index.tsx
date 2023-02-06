import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { DrawerContent, DrawerItemList, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, Texto } from './styles';
import firebase from '../../connect';
import { RootState } from '../../store';
import { propsStack } from '../../routes/types';
import { resetUser } from '../../store/store';

export function HeaderDrawer(props: DrawerContentComponentProps) {

  const usuario = useSelector((state: RootState) => state.usuario)
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  useEffect(() => {
    if (usuario.state) {
      setState(true)
    }
  },[usuario])

  function Logout() {
    firebase.auth().signOut()
    .then(() => {
      dispatch(resetUser());
      setState(false)
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Image 
            source={{ uri: usuario.perfil }}
            style={{ width: 70, height: 70 }} 
            borderRadius={50}
        />
        {state ? 
          <View style={{ marginLeft: 12, justifyContent: 'space-between' }}>
              <Texto numberOfLines={2}>{usuario.nome}</Texto>
              <Pressable onPress={() => Logout()}>
                <Texto style={{ textDecorationLine: "underline" }}>Sair</Texto> 
              </Pressable>
          </View>
        : 
          <Pressable style={{ marginLeft: 12, }} onPress={() => navigation.navigate("Login")}>
            <Texto style={{ textDecorationLine: "underline" }} numberOfLines={2}>Login</Texto>
          </Pressable>
        }
      </Header>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}