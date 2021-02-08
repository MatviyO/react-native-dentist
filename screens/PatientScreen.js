import React from 'react'
import {GreyText, Button} from '../components'
import styled from "styled-components/native";
import {Foundation} from "@expo/vector-icons";

const PatientScreen = () => (
    <Container>
        <PatientFullName>Guan Maria</PatientFullName>
        <GreyText>+ 380 87 44 44 344</GreyText>
        <PattientButtons>
            <FormulaButtonView>
                <Button>Formula</Button>
            </FormulaButtonView>
            <PhoneButtonView>
                <Button color="#84D269"> <Foundation name="telephone" size={22} color="white" /></Button>
            </PhoneButtonView>
        </PattientButtons>

        <PatientAppointments></PatientAppointments>
    </Container>
)

const PatientAppointments = styled.View`
  flex: 1;
  background: #f8fafd;  
`;
const FormulaButtonView = styled.View`
    flex: 1;
`;
const PhoneButtonView = styled.View`
    margin-left: 10px;
    width: 45px;
`;

const PattientButtons = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 20px;
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

