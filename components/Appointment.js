import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import GreyText from './GreyText'
import Badge from "./Badge";

const Appointment = ({item ,navigate }) => {
    const {user: { avatar, fullName}, description, time, active} = item;
    return (
        <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
            <Avatar source={{uri: `${avatar}`}}/>
            <View style={{flex: 1}}>
                <FullName>{fullName}</FullName>
                <GreyText>{description}</GreyText>
            </View>
            <Badge active={active}>{time}</Badge>
        </GroupItem>
    )
}
export default Appointment;




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

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;


