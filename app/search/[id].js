import React from 'react'
import {Stack, useRouter, useGlobalSearchParams} from 'expo-router'
import {View, Text, ScrollView, ActivityIndicator,FlatList} from 'react-native'
import { NearbyJobCard } from '../../components'
import useFetch from '../../hook/useFetch'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ScreenHeaderBtn} from '../../components'
import {icons,SIZES, COLORS, images} from '../../constants'


const searchPage = () => {
    const router = useRouter()

    const {id} = useGlobalSearchParams()

    const {data,isLoading,error,refetch} = useFetch('search',
    {
        query:id.toString(),
        pages:1
    })

     const handleCardPress = (id) => {
        console.log(id);
        router.push(`job-details/${id}`)
    }

    console.log(id)

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>

        <Stack.Screen
        options={{
          headerStyle:{backgroundColor:COLORS.lightWhite},
          headerShadowVisible:false,
          headerBackVisible:false,
          headerLeft:() => 
                         (  
                            <ScreenHeaderBtn iconUrl={icons.left} dimension='60%' handlePress={() => router.back()}/>
                            ),
                    
                    headerTitle:''
          
        }}
        
        />


        {
            isLoading ? 

            <ActivityIndicator size='large' color={COLORS.primary} />

            :
            error?
            <Text>An error occured</Text>
            :
            data?.length > 0 ?

            <View>

            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <NearbyJobCard item={item} handleCardPress={handleCardPress} />
                    )}
                keyExtractor={item => item.job_id}
                />
            </View>
            :
            null
        }
        <Text>{id}</Text>
    </SafeAreaView>
  )
}
export default searchPage