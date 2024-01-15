import React from 'react'
import { useRouter } from 'expo-router';
import { View, Text ,Image} from 'react-native'
import { checkImageURL } from "../../../utils";

import styles from './company.style'
import { icons } from '../../../constants';

const Company = ({job}) => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          
          }} style={styles.logoImage} resizeMode='contain'
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{job?.job_title}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{job?.employer_name} /</Text>
        <View style={styles.locationBox}>
          <Image 
            source={icons.location}
            style={styles.locationImage}
            resizeMode='contain'
          />
          <Text style={styles.locationName}>{job?.job_country},{job?.job_state}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company