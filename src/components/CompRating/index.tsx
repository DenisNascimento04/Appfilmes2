import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import themes from '../../themes';
// import { Container } from './styles';

type Props = {
    rating: string
}

export function CompRating({ rating }: Props) {

    const stars = [1,2,3,4,5];

  return (
    <View style={{ flexDirection: 'row' }}>
        {stars.map((item, index) => {
            if (item <= parseInt(rating)) {
                return(
                    <AntDesign key={index} name='star' color={themes.colors.DESTAQUE} size={14} style={{ marginRight: 4 }} />
                );
            }else{
                return(
                    <AntDesign key={index} name='star' color={themes.colors.CONTRASTE} size={14} style={{ marginRight: 4 }} />
                );
            }
        })}
    </View>
  );
}