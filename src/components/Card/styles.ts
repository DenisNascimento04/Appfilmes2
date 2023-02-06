import styled from 'styled-components/native';

export const Touch = styled.TouchableOpacity`
   max-width: 150px; 
   padding: 4px;
   margin-right: 8px;
`;

export const Img = styled.Image`
  width: 150px;
  height: 200px;
  margin-bottom: 4px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  color: ${( props ) => props.theme.colors.CONTRASTE};
  font-size: 14px;
  font-family:  ${( props ) => props.theme.fonts._400};
`;

export const Rating = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._400};
    font-size: 14px;
`;
