import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.FUNDO};
`;
export const Cab = styled.View`
    /* padding: 12px 16px; */
    flex-direction: row;
    align-items: center;
`;
export const Titulo = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._700};
    font-size: 24px;
`;

export const Touch = styled.TouchableOpacity`
   max-width: 150px; 
   padding: 4px;
   margin-right: 8px;
`;

export const Img = styled.Image`
  width: 125px;
  height: 180px;
  margin-bottom: 4px;
  border-radius: 12px;
`;
