import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';


import styles from './nearbyjobs.style'
import { SIZES } from '../../../constants';

const Nearbyjobs = () => {
  const router = useRouter()

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const handleCardPress = (id) => {
    router.push(`job-details/${id}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <Text style={styles.headerBtn}>Show all</Text>
      </View>

      <View style={styles.cardsContainer}>

        {
          isLoading ?

          <ActivityIndicator size='large'/>

          :

          error ?
          <Text>An error has occured</Text>

          :

          <FlatList
            data={data}
            renderItem={({item}) => (
              <NearbyJobCard item={item} handleCardPress={handleCardPress}/>
            )}
            keyExtractor={item => item.job_id}

          
          />

        } 

      </View>

      
      
    </View>
  )
}

export default Nearbyjobs