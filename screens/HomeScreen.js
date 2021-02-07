import {SectionList} from "react-native";
import {Appointment, SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native/dist/styled-components.native.esm";
import React from "react";

const DATA = [
    {
        title: '5 February',
        data: [
            {
                time: '12:30',
                description: 'description, for description',
                active: true,
                user: {
                    fullName: 'Seria Name',
                    avatar: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'
                }
            },
            {
                time: '14:30',
                description: 'description, for description',
                active: false,
                user: {
                    fullName: 'Georgia Name',
                    avatar: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'
                }
            },
        ]
    },
    {
        title: '6 February',
        data: [
            {
                time: '12:30',
                description: 'description, for description',
                active: true,
                user: {
                    fullName: 'Seria Name',
                    avatar: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'
                }
            },
            {
                time: '14:30',
                description: 'description, for description',
                active: false,
                user: {
                    fullName: 'Georgia Name',
                    avatar: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'
                }
            },
        ]
    },
]


export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'patients',
        headerColor: '#2A86FF',
        headerStyle: {
            elevation: 0.5,
            shadowOpacity: 0.5
        }
    }
    render() {
        const {navigation} = this.props;
        return(
            <Container>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Appointment
                        navigate={navigation.navigate} {...item} />}
                    renderSectionHeader={({section: {title}}) => (
                        <SectionTitle>{title}</SectionTitle>
                    )}
                />
                <PlusButton>
                    <Ionicons name="ios-add" size={36} color="white"/>
                </PlusButton>
            </Container>
        )
    }
}

const PlusButton = styled.TouchableOpacity`
    align-items: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2a86ff;
    position: absolute;
    right: 25px;
    bottom: 25px;
    shadow-color: '#2A86FF';
    shadow-opacity: 0.7;
    shadow-radius: 4.5;
    elevation: 4;           
`;

const Container = styled.View`
  flex: 1;
`;
