import React from 'react'
import {Image,TouchableOpacity,Alert} from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {

  const CreateTwoButtonAlert = () => Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => {CreateTwoButtonAlert}}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn