import React from 'react'
import { View, Text, Image, FlatList} from 'react-native'
import { icons } from '../../../constants'

import styles from './specifics.style'

const Specifics = ({job}) => {

  const about = job?.job_description.split(`About ${job?.employer_name}`)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qualifications:</Text>
      <View style={styles.pointsContainer}>

        <FlatList 
          data={job?.job_highlights.Qualifications}
          renderItem={({item}) => (
            <View style={styles.pointWrapper}>
              <View style={styles.pointDot}></View>
              <Text style={styles.pointText}>{item}</Text>
            </View>
          )}
        />

      </View>
      {/* <Text>{about[1]}</Text> */}
    </View>
  )
}

export default Specifics