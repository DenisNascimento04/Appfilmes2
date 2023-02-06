import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, ImageBackground, Dimensions, Pressable, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { ButtonsHead, Cabeca, Categorias, Divisor, Header, ImgBack, Play, SubTitulo, TextoMeta, Textos, Titulo } from './styles';
import themes from '../../themes';
import { PropsMovies } from '../../types';
import { setFavoritos } from '../../store/store';
import { RootState } from '../../store';
import Reanimated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export function PageMovies() {

  const route = useRoute();
  // @ts-ignore
  const data:PropsMovies = route.params?.data;
  const usuario = useSelector((state: RootState) => state.usuario)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
      scrollY.value = event.contentOffset.y;
  });

  var setFav = () => {
    return usuario.favoritos.some((item) => item.id === data.id);
  }

  const AddFav = () => {
    if (usuario.state) {
      dispatch(setFavoritos(data))
    }
  }
  
  const headerStyle = useAnimatedStyle(() => {
    return {
        height: interpolate(
            scrollY.value,
            [0, 400],
            [550, 150],
            Extrapolate.CLAMP,
        ),
    };
});

  return (
    <Reanimated.ScrollView
      contentContainerStyle={{  }} 
      // onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={{  }}
    >
      <StatusBar backgroundColor='transparent' style='light' />
      <Cabeca>
        <ImgBack source={{ uri: data.capaV }} />
        <Header style={[]}>
          <ButtonsHead onPress={() => navigation.goBack()} >
            <AntDesign name='arrowleft' size={24} color={themes.colors.CONTRASTE} />
          </ButtonsHead>

          <ButtonsHead style={{ flexDirection: "row" }} >
            <Pressable style={{ marginRight: 14 }}>
              <AntDesign name='download' size={24} color={themes.colors.CONTRASTE} />
            </Pressable>

            {setFav() ? 
              <Pressable onPress={() => {}}>
                <AntDesign name='heart' size={24} color={themes.colors.DESTAQUE} />
              </Pressable>
            :
            <Pressable onPress={AddFav}>
                <AntDesign name='hearto' size={24} color={themes.colors.CONTRASTE} />
              </Pressable>
            }
          </ButtonsHead>
        </Header>

        <Play>
          <Ionicons name='play' size={32} color={themes.colors.CONTRASTE} />
        </Play>

        <View style={{ alignItems: 'center', justifyContent: 'center', zIndex: 2, position: 'absolute', top: 450, left: 350 }}>
          <View style={{ borderRadius: 4, paddingHorizontal: 6, paddingVertical: 4,
            backgroundColor: 
            parseInt(data.meta) >= 61 ? "#2ECC71" :
            parseInt(data.meta) >= 40 && parseInt(data.meta) <= 60 ? "#fc3" :
            parseInt(data.meta) >= 0 && parseInt(data.meta) <= 39 ? "#f00" : '#f2f2f2',
          }}>
            <TextoMeta style={{ fontSize: 32, color: themes.colors.FUNDO }}>
              {data.meta}
            </TextoMeta>
          </View>
        </View>
        <LinearGradient colors={[ "transparent", themes.colors.FUNDO ]} style={{ width, height: 250 }} />
      </Cabeca>

      <View style={{  backgroundColor: themes.colors.FUNDO, paddingBottom: 40 }}>
        <View style={{  paddingHorizontal: 16 }}>
          <Titulo>
            {data.titulo}
          </Titulo>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name='star' size={14} color="#F4D03F" />
              <Textos style={{ marginLeft: 2, color: "#F4D03F" }}>{data.rating}</Textos>
            </View>

            <Divisor />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name='clockcircleo' size={14} color={themes.colors.CONTRASTE} />
              <Textos style={{ marginLeft: 4 }}>
                {data.duracao}
              </Textos>
            </View>

            <Divisor />

            <Textos>
              {data.lancamento}
            </Textos>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {data.tipos.map((item, index) => (
                <Categorias key={index}>
                  {item}
                </Categorias>
              ))}
            </View>
          </View>

        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
          <SubTitulo style={{ marginBottom: 4, }}>Sinopse</SubTitulo>
          <Textos>{data.sinopse}</Textos>
        </View>

        <View style={{ marginTop: 12 }}>
          <View style={{ marginLeft: 16 }}>
            <SubTitulo style={{  marginBottom: 4 }}>Direção</SubTitulo>
          </View>
          <FlatList 
            data={data.equipe.diretor}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_,i) => i.toString()}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item, index }) => (
              <View key={index} style={{ alignItems: 'center', maxWidth: 100, marginRight: 24 }}>
                <Image 
                  source={{ uri: item.foto }} 
                  style={{ width: 80, height: 120 }} 
                  borderRadius={16}
                />
                <Textos  style={{ textAlign: "center", marginTop: 6 }} >
                  {item.nome.split(" ")[0]}  
                  {'\n'} 
                  {item.nome.split(" ")[1]}  
                </Textos>
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <View style={{ marginLeft: 16 }}>
            <SubTitulo style={{ marginBottom: 4 }}>Elenco</SubTitulo> 
          </View>
          <FlatList 
            data={data.equipe.elenco}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_,i) => i.toString()}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item, index }) => (
              <View key={index} style={{ alignItems: 'center', maxWidth: 100, marginRight: 24 }}>
                <Image 
                  source={{ uri: item.foto }} 
                  style={{ width: 80, height: 120 }} 
                  borderRadius={16}
                />
                <Textos  style={{ textAlign: "center", marginTop: 6 }} >
                  {item.nome.split(" ")[0]}  
                  {'\n'} 
                  {item.nome.split(" ")[1]}  
                </Textos>
                <Textos numberOfLines={1} style={{ textAlign: "center", fontSize: 12, opacity: .5, marginTop: 6 }} >
                  {item.personagem}  
                </Textos>
              </View>
            )}
          />
        </View>

      </View>

    </Reanimated.ScrollView>
  );
}