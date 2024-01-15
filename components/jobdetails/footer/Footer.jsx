import React from 'react'
import { View, Text, Image} from 'react-native'

import styles from './footer.style'

import { images,icons } from '../../../constants'

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.likeBtn}>
        <Image source={icons.heart} style={styles.likeBtnImage} /> 
      </View>
      <View style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </View>
    </View>
  )
}

export default Footer