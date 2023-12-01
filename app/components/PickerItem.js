import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from './AppText';

const PickerItem = ({lable, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{lable}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem
