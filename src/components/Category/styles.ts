import styled from 'styled-components/native';

export const Press = styled.Pressable`
    width: 170px; 
    height: 80px; 
    overflow: hidden; 
    border-radius: 12px; 
    margin-right: 12px; 
    box-shadow: 10px 5px 5px ${({ theme }) => theme.colors.CONTRASTE}; 
`;
export const Img = styled.Image`
    width: 100%;
    height: 100%; 
    position: absolute;
`;
export const ViewBlur = styled.View`
    width: 100%; 
    height: 100%; 
    background-color: 'rgba(229, 9, 20, .7)'; 
    padding: 12px 24px ;
    align-items: center; 
    justify-content: center;
`;
export const Texto = styled.Text`
    color: ${({ theme }) => theme.colors.CONTRASTE};
    font-family: ${({ theme }) => theme.fonts._400};
    font-size: 14px;
`;
