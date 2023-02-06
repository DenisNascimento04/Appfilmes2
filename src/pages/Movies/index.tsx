import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { RootState } from '../../store';
import { Cab, Container, Img, Titulo } from './styles';
import themes from '../../themes';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/types';


export default function Movies() {

    const usuario = useSelector((state: RootState) => state.usuario)
    const navigation = useNavigation<propsStack>();

    return(
        <Container>
            <Header title='Meus Filmes' />
            <FlatList 
                data={usuario.favoritos}
                keyExtractor={(_,i) => i.toString()}
                numColumns={3}
                contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
                renderItem={({ item }) => {
                    return(
                        <Pressable 
                            onPress={() => navigation.navigate('PageMovies', { data: item })} 
                            style={{ marginRight: 6, marginBottom: 6 }}
                        >
                            <Img 
                                source={{ uri: item.capaV }} 
                                borderRadius={4} 
                                // resizeMode='contain'
                            />
                        </Pressable>
                    );
                }}
            />
        </Container>
    );
}