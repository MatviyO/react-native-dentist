import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>5 February</GroupTitle>
        <GroupItem>
            <Avatar source={{uri: 'https://sun9-17.userapi.com/s/v1/if1/5AzvhAQqWR8f-FTze5gyImXOKyXEXsPF8OnxyA2hXHccvNuzg5D5xbsqMs__M3E_jeF8cA.jpg?size=100x0&quality=96&crop=0,25,909,909&ava=1'}} />
            <View>
              <FullName>Velge Aria</FullName>
              <GrayText></GrayText>

            </View>
        </GroupItem>
      </Group>
    </Container>
  );
}

const GrayText = styled.Text`
  
`;
const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;  
`;

const GroupItem = styled.View`
  flex-direction: row;
  padding: 20px 0px;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Group = styled.View`
  padding: 0 20px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`
