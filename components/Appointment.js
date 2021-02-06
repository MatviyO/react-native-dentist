import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const Appointment = ({user, description, time, active}) => {
    return (
        <GroupItem key={index}>
            <Avatar source={{uri: `${user.avatar}`}}/>
            <View style={{flex: 1}}>
                <FullName>{user.fullName}</FullName>
                <GrayText>{description}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    )
}
export default Appointment;


const GroupDate = styled.Text`
  backgroud: ${props => (props.active ? '#2A86FF' : '#e9f5ff')};
  color: ${props => (props.active ? '#fff' : '#4294ff')};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  align-items: center;
  text-align: center;
  line-height: 28px;
`;


const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
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

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;


