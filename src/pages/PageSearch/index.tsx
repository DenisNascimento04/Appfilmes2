import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { ButtonFiltro, ButtonInput, Cabecalho, CardSearch, Container, ContainerInput, Input, Texto } from './styles';
import themes from '../../themes';
import { CompRating } from '../../components/CompRating';
import data from '../../database/data.json';
import { propsStack } from '../../routes/types';
import { RootState } from '../../store';

export function PageSearch() {

    const usuario = useSelector((state: RootState) => state.usuario)
    const [pesquisa, setPesquisa] = useState("");
    const [set, setSet] = useState("");
    const [filtro, setFiltro] = useState<string[]>([""]);
    const navigation = useNavigation<propsStack>(); 
    const categorias = [
        "Aventura",
        "Ação",
        "Fantasia",
        "Crime",
        "Animação",
        "Musical",
        "Familia",
        "Ficção científica",
    ];
    const result = () => {
        var filter = data.filter((item) => {
            if (item.titulo.toLocaleUpperCase().includes(pesquisa.toLocaleUpperCase())) {
                return {...item}
            }
        })

        if (filtro.length != 1) {
            var result = filter.filter((item) => {
                for (let i = 0; i < filtro.length; i++) {
                    if (item.tipos.includes(filtro[i])) {
                        return {...item}
                    }
                    
                }
            })
            return result;
        }

        if (filter?.length === 0 ) {
            var filter = data.filter((item) => {
                if (item.equipe.diretor[0].nome.toLocaleUpperCase().includes(pesquisa.toLocaleUpperCase())) {
                    return {...item}
                }
            })
            return filter
        }

        return filter
    };

    function SetarFiltro(tipo: string) {
        if (filtro.includes(tipo)) {
            var res = filtro.indexOf(tipo)
            var p1 = filtro.slice(0, res);
            var p2 = filtro.slice(res+1, filtro.length-1);
            var result = p1.concat(p2);
            setFiltro(result);
        }else{
            setFiltro([...filtro, tipo])
        }
    }

    // console.log("Final: "+filtro)

  return (
    <Container>
        <Cabecalho>
            <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name='arrowleft' size={24} color={themes.colors.CONTRASTE} />
            </Pressable>
            <Image 
                source={{ uri: usuario.perfil }}
                style={{ width: 32, height: 32 }}
                borderRadius={8}
            />
        </Cabecalho>

        <ContainerInput>
            <Input
                placeholder='Ex: Vingadores'
                placeholderTextColor={themes.colors.FUNDO}
                onSubmitEditing={(event) => setPesquisa(event.nativeEvent.text)}
            />
            <ButtonInput>
                <Feather name='search' size={20} color={themes.colors.FUNDO} />
            </ButtonInput>
        </ContainerInput>
        <View>
            <FlatList 
                data={categorias}
                horizontal
                keyExtractor={(_,i) => i.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 12, paddingLeft: 16, }}
                renderItem={({ item }) => (
                    <ButtonFiltro style={{ 
                        backgroundColor: filtro.includes(item) ? 
                        themes.colors.DESTAQUE :
                        "#383034"
                    }} onPress={() => SetarFiltro(item)}>
                        <Texto>{item}</Texto>
                    </ButtonFiltro>
                )}
            />
        </View>

        <FlatList 
            data={result()}
            keyExtractor={(_,i) => i.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 14, paddingBottom: 24 }}
            renderItem={({ item, index }) => (
                <CardSearch key={index} onPress={() => navigation.navigate("PageMovies",{ data: item })}>
                    <Image 
                        source={{ uri: item.capaV }}
                        style={{ width: 130, height: 190, top: -50, left: 16, position: 'absolute' }} 
                        resizeMode='contain'
                        borderRadius={4}
                    />
                    <View style={{ justifyContent: 'space-between', marginVertical: 16 }}>
                        <Texto style={{ fontSize: 16 }}>{item.titulo}</Texto>
                        <CompRating rating={item.rating} />
                        <Texto style={{ opacity: .5 }}>Direção: {item.equipe.diretor[0].nome}</Texto>
                        <Texto style={{ opacity: .5 }}>{item.duracao}</Texto>
                    </View>
                </CardSearch>
            )}
        />
    </Container>
  );
}