import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import {Stack,useRouter} from 'expo-router'

import { images, icons, COLORS, SIZES } from '../constants'
import { Nearbyjobs,Welcome, Popularjobs, ScreenHeaderBtn } from '../components';


const index = () => {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");


  return (
    <SafeAreaView style={styles.safeAreaView}>
        <Stack.Screen 
            options={
                {
                    headerStyle:{backgroundColor: '#ffffff'},
                    headerShadowVisible: false,
                    headerLeft:() => 
                         (  
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
                            ),
                    headerRight:() => 
                         (  
                            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%'/>
                            ),
                    headerTitle:''
                    

                }
            }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.view}>
                <Welcome 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                if (searchTerm) {
                    router.push(`/search/${searchTerm}`)
                }
            }}/>
                <Popularjobs/>
                <Nearbyjobs/>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}


const styles = {
    safeAreaView:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    view:{
        flex:1,
        padding:SIZES.medium
    }
}

export default index