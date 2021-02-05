import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import {Group} from "./components/Group";

const user = [
    {
        time: '12:30',
        description: 'description, for description',
        user: {
            fullName: 'Seria Name',
            avatar: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'
        }
    },
    {
        time: '14:30',
        description: 'description, for description',
        user: {
            fullName: 'Georgia Name',
            avatar: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'
        }
    },
]

export default function App() {
  return (
    <Container>
        <Group title="5 Fabruary" items={user}> </Group>

    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`
