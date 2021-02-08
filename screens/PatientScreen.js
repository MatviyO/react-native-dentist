import React from 'react'
import {Text} from "react-native-web";


const PatientScreen = () => (
    <Container>
        <PatientFullName>Guan Maria</PatientFullName>
    </Container>
)

const PatientFullName = styled.Text`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
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

