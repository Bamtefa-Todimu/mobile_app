import React, {useState} from 'react'
import { View, Text, TextInput, Image, TouchableOpacity,FlatList} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'

import { images, icons, COLORS, SIZES } from '../../../constants'


const jobTabs = ['Product','Design','Development']

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter()

  // const [searchTerm,setSearchTerm] = useState('')
  const [activeJobType,setActiveJobType] = useState()


  // const handleSearch = () => {
  //   router.push(`./search/${searchTerm}`)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Antonio</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
            <TextInput  
              style={styles.searchInput}
              placeholder='What are you looking for?'
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search} style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTabs}
          renderItem={({item}) => 
        
        <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={() => setActiveJobType(item)}>
                  <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
                </TouchableOpacity>
        }
          keyExtractor={item => item.id}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal={true}
        />
        
        
      </View>
    </View>
  )
}



export default Welcome