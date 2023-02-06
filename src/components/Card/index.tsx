import React from 'react';
import { View, Text } from 'react-native';
import { PropsMovies } from '../../types';
import { Img, Rating, Title, Touch } from './styles';
import { AntDesign } from '@expo/vector-icons';
import themes from '../../themes';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/types';

type Props = {
    data: PropsMovies
}

export function Card({ data }: Props) {

    const navigation = useNavigation<propsStack>();

  return (
    <Touch key={data.id} onPress={() => navigation.navigate("PageMovies", { data: data })}>
        <Img 
            source={{ uri: data.capaV }} 
            borderRadius={4} 
            // resizeMode='contain'
        />
        <View>
            <Title>{data.titulo}</Title>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Rating style={{ marginRight: 4 }}>{data.rating}</Rating>
                <AntDesign size={12} color={themes.colors.DESTAQUE} name='star' />
            </View>
        </View>
    </Touch>
    );

}