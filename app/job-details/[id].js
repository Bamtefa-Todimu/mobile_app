import {useCallback, useState} from 'react'
import {Stack,useRouter} from 'expo-router'
import {View,Text,ScrollView, SafeAreaView,ActivityIndicator,RefreshControl} from 'react-native'
import { images, icons, COLORS, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'
import { useGlobalSearchParams } from 'expo-router'

import { ScreenHeaderBtn } from '../../components'


import { Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics} from '../../components'


const JobDetails = () => {

  const [refreshing,setRefreshing] = useState(false)
  const router = useRouter()

  const {id} = useGlobalSearchParams()

  const {data,isLoading,error,refetch} = useFetch(
    'job-details',
    {
      job_id:id,
      extended_publisher_details:'false'
    }
  )

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  },[])
  


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
                    headerRight:() => 
                         (  
                            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%'/>
                            ),
                    headerTitle:''
          
        }}
        
        />

        <ScrollView showsVerticalScrollIndicator={false} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>

        <View style={{paddingHorizontal:SIZES.medium}}>


        {
          isLoading?

            <ActivityIndicator size='large'/>
            :
            error?
            <Text>An error occured </Text>

            :

            <View>
              <Company job={data[0]}/>
              <JobTabs job={data[0]}/>
              <Specifics job={data[0]}/>
              <JobAbout job={data[0]}/>
            </View>
        }

        </View>
        </ScrollView>
        <JobFooter job={data[0]}/>



        


    </SafeAreaView>
  )
}

export default JobDetails