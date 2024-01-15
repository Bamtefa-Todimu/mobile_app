import React, {useState} from 'react'
import { View, Text , FlatList} from 'react-native'

import styles from './tabs.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIZES } from '../../../constants'

const tabHeaders = ['Description','Company','Reviews']

const Tabs = ({job}) => {
  const [activeTab,setActiveTab] = useState('Description')
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabHeaders}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.btn(item,activeTab)} onPress={() => setActiveTab(item)}>
            <Text style={styles.btnText(item,activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
      />
    </View>
  )
}

export default Tabs