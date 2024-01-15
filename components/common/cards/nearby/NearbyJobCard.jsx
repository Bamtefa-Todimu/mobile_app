import React from 'react'
import { View, Text, Image } from 'react-native'
import { checkImageURL } from "../../../../utils";


import styles from './nearbyjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const NearbyJobCard = ({item,handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleCardPress(item.job_id)}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }} style={styles.logImage} resizeMode='contain' />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard