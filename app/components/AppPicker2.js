import React, {useState} from 'react';
import {Platform, View, StyleSheet, Button, Modal} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from './AppText';
import defaultStyles from '../config/styles';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from './Screen';
import PickerItem from './PickerItem';



const AppPicker2 = ({icon, placeholder, item}) => {
const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
     <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

        <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={30} color={defaultStyles.medium} style={styles.icon}/>}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons name='chevron-down' size={30} color={defaultStyles.medium}/>
    </View>
    </TouchableWithoutFeedback>

    <Modal visable={modalVisible} animationType='slide'>
        <Screen>
            <Button title='Close' onPress={() => setModalVisible(false)}/>
            <FlatList data={item} keyExtractor={item => item.value.toString()} renderItem={(item) => <PickerItem label={item.label} onPress={() => console.log(item)}/>}/>
        </Screen>
    </Modal>
    
    </>
   
    
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.light,
        backgroundRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1
    }
})


export default AppPicker2
