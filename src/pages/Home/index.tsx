import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Dimensions, Animated, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Container, Content, Title } from './styles';

import data from '../../database/data.json';
import { Card } from '../../components/Card';
import { CompRating } from '../../components/CompRating';
import themes from '../../themes';
import { Category } from '../../components/Category';
import { propsStack } from '../../routes/types';
import { CardG } from '../../components/CardG';

const { width, height } = Dimensions.get('window')

export default function Home() {

    const scrollX = useRef(new Animated.Value(0)).current;
    const item_size = width *.55;
    const spacer = (width - item_size) / 2
    const navigation = useNavigation<propsStack>();

    const categorias = [
        {
            nome: "Ação",
            thamb: "https://img.ibxk.com.br/2021/12/16/16112715436190.jpg",
        },
        {
            nome: "Drama",
            thamb: "https://www.bslidiomas.com.br/wp-content/uploads/2019/11/images-1-min.jpg",
        },
        {
            nome: "Ficção",
            thamb: "https://www.showmetech.com.br/wp-content/uploads//2017/07/Filmes-de-fica%C3%A7%C3%A3o-cientifica.jpg",
        },

    ]

    return(
        <Container>
            <Header title='APP MOVIES'/>
            <Content>
                <View style={{ marginBottom: 24, marginTop: 10 }}>
                    <Title>Filmes</Title>
                    <Animated.FlatList 
                        data={data}
                        contentContainerStyle={{ paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_,i) => i.toString()}
                        snapToInterval={item_size}
                        scrollEventThrottle={16}
                        decelerationRate={0}
                        bounces={false}
                        pagingEnabled
                        horizontal
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        renderItem={({ item, index }) => {
                            const inputRange = [
                                (index - 1) * (item_size),
                                index * (item_size),
                                (index + 1) * (item_size),
                            ];
                            const translateY = scrollX.interpolate({
                                inputRange,
                                outputRange: [-20, 0, -20]
                            })
                            const scale = scrollX.interpolate({
                                inputRange,
                                outputRange: [.9, 1, .9]
                            })
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [.6, 1, .6]
                            })

                            return(
                                <Pressable onPress={() => navigation.navigate("PageMovies", {data: item})}>
                                    <Animated.View key={index} style={{ transform: [{ scale }], opacity }}>
                                        <Animated.Image 
                                            key={index}
                                            source={{ uri: item.capaV }}
                                            style={{ width: item_size, height: 300, marginRight: 8 }}
                                            borderRadius={8}
                                        />
                                        <Text numberOfLines={2} style={{ maxWidth: item_size, color: themes.colors.CONTRASTE, marginTop: 2, marginBottom: 4 }}>{item.titulo}</Text>
                                        
                                        <CompRating rating={item.rating}/>
                                    </Animated.View>
                                </Pressable>
                            );
                        }}
                    />
                </View>

                <View style={{ marginTop: 12 }}>
                    <FlatList 
                        data={categorias}
                        horizontal
                        scrollEventThrottle={16}
                        keyExtractor={(_,i) => i.toString()}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 16, paddingBottom: 32 }}
                        renderItem={({ item }) => {
                            return(
                                <Category 
                                    nome={item.nome} 
                                    thamb={item.thamb} 
                                />
                            );
                        }}
                    />
                </View>

                <View style={{ marginBottom: 16 }}>
                    <Title>Tendências</Title>
                    <View>
                        <FlatList 
                            data={data}
                            keyExtractor={(_,i) => i.toString()}
                            horizontal
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingRight: 16, paddingLeft: 16 }}
                            renderItem={({ item, index }) => (
                                <Card
                                    key={index}
                                    data={item}
                                />
                            )}
                        />
                    </View>
                </View>
                <View style={{ }}>
                    <Title>Mais Vistos</Title>
                    <View style={{ paddingLeft: 16 }}>
                        {data.map(( item, index ) => (
                            <CardG 
                                key={index} 
                                data={item} 
                            />
                        ))}
                    </View>
                </View>
            </Content>

        </Container>
    );
}