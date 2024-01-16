import React, { useState } from 'react'
import {Stack, useRouter, useGlobalSearchParams} from 'expo-router'
import {SafeAreaView, View, Text, ScrollView, ActivityIndicator,FlatList, Image, TouchableOpacity} from 'react-native'
import { JobTabs, NearbyJobCard } from '../../components'
import useFetch from '../../hook/useFetch'
import {ScreenHeaderBtn} from '../../components'
import {icons,SIZES, COLORS, images} from '../../constants'

const tabHeaders = ['Most Relevant','Most Recent']

import styles from '../../components/jobdetails/tabs/tabs.style'

const searchPage = () => {
    const router = useRouter()

    const {id} = useGlobalSearchParams()

    const [activeTab,setActiveTab] = useState('Most Relevant')

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
                        headerRight: () => (<></>),
                    
                    headerTitle:''
          
        }}
        
        />


        <ScrollView showVerticalScrollIndicator={false} style={{padding:SIZES.large * 1.5}}>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:6}}>
                    <Text style={{color:COLORS.primary,fontSize:24,fontWeight:'500'}}>{id}</Text>
                    <View style={{width:35,height:35,position:'relative',backgroundColor:COLORS.tertiary,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:'60%',height:'60%'}} source = {icons.filter} resizeMode='contain'/>
                    </View>
                </View>
                <View>
                    <Text style={{color:COLORS.primary,fontWeight:'500'}}>{data?.length} job opportunities</Text>
                </View>
                <View>
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
                </View>
                <View>
                {
                    isLoading ? 

                    <ActivityIndicator size='large' color={COLORS.primary} />

                    :
                    error?
                    <Text>An error occured</Text>
                    :
                    data?.length > 0 ?


                    <FlatList 
                        data={activeTab === 'Most Recent'? data.sort((a,b) => a.job_posted_at_timestamp - b.job_posted_at_timestamp ): data}
                        renderItem={({item}) => (
                            <NearbyJobCard item={item} handleCardPress={handleCardPress} />
                            )}
                            keyExtractor={item => item.job_id}
                            />
                            :
                            null
                        }
                </View>
                    </ScrollView>
    </SafeAreaView>
  )
}


export default searchPage