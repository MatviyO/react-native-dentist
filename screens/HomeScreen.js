import React, { useState, useEffect } from 'react'
import {SectionList, StyleSheet, View, Text} from "react-native";
import {Appointment, SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";
import * as Location from 'expo-location';
import axios from "axios";

const HomeScreen = ({navigation}) => {

    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://trycode.pw/c/DL5L6.json').then(({data}) => {
            console.log(data)
            setData(data);
        })
    }, [])
   return (
       <Container>
           {data && <SectionList
               style={style.borderList}
               sections={data}
               keyExtractor={(item, index) => index}
               renderItem={({item}) => <Appointment
                   navigate={navigation.navigate} item={item}/>}
               renderSectionHeader={({section: {title}}) => (
                   <SectionTitle>{title}</SectionTitle>
               )}
           />}

           <PlusButton>
               <Ionicons name="ios-add" size={36} color="white"/>
           </PlusButton>
       </Container>
   )
}

const style = StyleSheet.create({
    borderList: {
        backgroundColor: '#fff'
    }
})
const GroupItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
  margin-bottom: 50px;
`;


HomeScreen.navigationOptions = {
    title: 'Patients',
    headerColor: '#2A86FF',
    headerTransparent: false,
    headerStyle: {
        elevation: 0.5,
        shadowOpacity: 0.5
    }
}
export default HomeScreen;


const PlusButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2a86ff;
    position: absolute;
    right: 25px;
    bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
`;
