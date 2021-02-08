import React from 'react'
import {GreyText, Button} from '../components'
import styled from "styled-components/native";
import Button from "../components/Button";
const PatientScreen = () => (
    <Container>
        <PatientFullName>Guan Maria</PatientFullName>
        <GreyText>+ 380 87 44 44 344</GreyText>
        <PattientButtons>
            <Button>Formula</Button>
            <Button color="green">P</Button>
        </PattientButtons>
    </Container>
)
const FormulaButton = styled.Button`
flex: 1;
`;

const PattientButtons = styled.View`
    display: flex;
    flex-firection: row;
    margin-top 20px;
`;

const PatientFullName = styled.Text`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 5px;
`;
const Container = styled.View`
    padding: 25px;
    
`;

PatientScreen.navigationOptions = {
    title: 'Road patients',
    headerColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }

}

export default PatientScreen

