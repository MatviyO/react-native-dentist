import React from "react";
import styled from "styled-components/native";
const Button = ({ children}) => {
    return (
        <ButtonWrapper>
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonWrapper>
    )
}
const ButtonWrapper = styled.TouchableOpacity`
    border-radius: 30px;
    background: #2A86FF;
    text-align: center;
    height: 45px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2a86ff;
`;

const ButtonText = styled.Text`
color: #fff;
font-weight: 400;
font-size: 16px;
`;
export default Button;
