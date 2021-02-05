
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Group = ({ title, items}) => {
    <Group>
        <GroupTitle>{title}</GroupTitle>
        {
            items.map(item => {
                <GroupItem>
                    <Avatar source={{uri: `${item.user.avatar}`}} />
                    <View style={{flex: 1}}>
                        <FullName>{item.user.fullName}</FullName>
                        <GrayText>{item.description}</GrayText>
                    </View>
                    <GroupDate active>{item.time}</GroupDate>
                </GroupItem>

            })
        }
    </Group>
}

Group.defaultProps = {
    title: 'Untitled',
    items: []
}

const GroupDate = styled.Text`
  backgroud: ${props => (props.active ? '#2A86FF' :  '#e9f5ff')};
  color: ${props => (props.active ? '#fff' :  '#4294ff')};
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
  padding: 20px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Group = styled.View`
  padding: 0 20px;
`;
