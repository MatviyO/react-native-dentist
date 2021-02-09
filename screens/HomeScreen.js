import React, { useState, useEffect } from 'react'
import {SectionList, StyleSheet, View, Text} from "react-native";
import {Appointment, SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";
import * as Location from 'expo-location';

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
                    avatar: 'https://sun9-18.userapi.com/s/v1/if1/tPqJ1XWMvcq06j5sX78RY8BTLAV8B5aZ6VG2YtQgeUubrGwZYKCZq02Vu0tXeJzqfqgVohmj.jpg?size=100x0&quality=96&crop=25,0,1711,1711&ava=1'
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
                    avatar: 'https://sun9-18.userapi.com/s/v1/if1/tPqJ1XWMvcq06j5sX78RY8BTLAV8B5aZ6VG2YtQgeUubrGwZYKCZq02Vu0tXeJzqfqgVohmj.jpg?size=100x0&quality=96&crop=25,0,1711,1711&ava=1'
                }
            },
        ]
    },
]


const HomeScreen = ({navigation}) => {
    const array = [];
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            console.log(location.coords)
            console.log(typeof location.coords)
            traking()
        })();
    }, []);
    const traking = () => {
        setTimeout(() => {
            (async () => {

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location.coords);
                array.push(location.coords)
                console.log('array', array)
            })();
        }, 1000)
    }

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
   return (
       <Container>
           <SectionList
               style={style.borderList}
               sections={DATA}
               keyExtractor={(item, index) => index}
               renderItem={({item}) => <Appointment
                   navigate={navigation.navigate} {...item} />}
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
