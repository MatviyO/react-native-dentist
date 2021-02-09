import React, { useState, useEffect } from 'react'
import {SectionList, StyleSheet, View, Text} from "react-native";
import {Appointment, SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";
import * as Location from 'expo-location';
import axios from "axios";

const HomeScreen = ({navigation}) => {

    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);
    //
    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }
    //
    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location.coords);
    //         console.log(location.coords)
    //         console.log(typeof location.coords)
    //         traking()
    //     })();
    // }, []);
    //
    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://trycode.pw/c/7LPCJ.json').then(({data}) => {
            const result = 
            setData(data);
        })
    }, [])
   return (
       <Container>
           <SectionList
               style={style.borderList}
               sections={DATA}
               keyExtractor={(item, index) => index}
               renderItem={({item}) => <Appointment
                   navigate={navigation.navigate} item={item} />}
               renderSectionHeader={({section: {title}}) => (
                   <SectionTitle>{title}</SectionTitle>
               )}
           />
           {/*<GroupItem>*/}
           {/*    <View >*/}
           {/*        <Text>{text}</Text>*/}
           {/*    </View>*/}
           {/*</GroupItem>*/}

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
