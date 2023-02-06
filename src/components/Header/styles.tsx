import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const MenuButton = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${( props ) =>  props.theme.colors.CONTRASTE};
  font-family: ${( props ) =>  props.theme.fonts._700};
  font-size: 18px;
  margin-left: 8px;
  
`;

export const ButtonInput = styled.TouchableOpacity`
    width: 30px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

// export const Container = styled.div`
  
// `;

