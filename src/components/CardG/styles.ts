import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row; 
    margin-bottom: 12px;
`;
export const Img = styled.Image`
    width: 140px; 
    height: 200px;
`;
export const Titulo = styled.Text`
    color: ${( props ) => props.theme.colors.CONTRASTE};
    font-size: 16px;
    font-family:  ${( props ) => props.theme.fonts._500};
    max-width: 210px;
`;
export const Texto = styled.Text`
    color: ${( props ) => props.theme.colors.CONTRASTE};
    font-size: 14px;
    font-family:  ${( props ) => props.theme.fonts._400};
    max-width: 250px;
    opacity: 0.5;
`;

export const Divisor = styled.View`
    margin: 0 8px;
    width: 4px; 
    height: 4px; 
    border-radius: 10px; 
    background-color: ${({ theme }) => theme.colors.CONTRASTE};
    opacity: 0.5;
`;
// export const Container = styled.TouchableOpacity`
//  
// `;
