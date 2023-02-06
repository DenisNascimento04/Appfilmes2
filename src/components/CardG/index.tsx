import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import themes from '../../themes';
import { PropsCard, PropsMovies } from '../../types';
import { CompRating } from '../CompRating';
import { Container, Divisor, Img, Texto, Titulo } from './styles';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/types';
// import { Container } from './styles';

type Props = {
    data: PropsMovies,
}

export function CardG({ data }: Props) {

    const navigation = useNavigation<propsStack>();

    return (
    <Container onPress={() => navigation.navigate("PageMovies", { data: data })}>
        <Img 
            source={{ uri: data.capaV }} 
            style={{ width: 140, height: 200 }}
            borderRadius={4}
            resizeMode='contain'
        />
        <View style={{ marginLeft: 8, justifyContent: 'space-between', paddingVertical: 2 }}>
            <Titulo style={{ marginBottom: 14 }}>{data.titulo}</Titulo>

            <CompRating rating={data.rating} />

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', maxWidth: 220, marginTop: 14 }}>
                {data.tipos.map(( item_, i ) => (
                    <View key={i} style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Texto>
                            {item_}
                        </Texto>
                        {data.tipos.length-1 === i ? null : <Divisor /> }
                    </View>
                ))}
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 14 }}>
                <Texto>{data.lancamento}</Texto>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
                    <AntDesign name='clockcircleo' size={12} color={themes.colors.CONTRASTE} style={{ opacity: .5 }} />
                    <Texto style={{ marginLeft: 6 }}>
                        {data.duracao}
                    </Texto>
                </View>
            </View>
            <Texto style={{ marginTop: 24 }}>Direção: {data.equipe.diretor[0].nome}</Texto>
        </View>
    </Container>
    );
}