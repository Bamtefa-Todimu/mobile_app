import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from  'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const Layout = () => {

    const [fontsLoaded] = useFonts({
        'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
        'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
        'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded)
        {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null
    else
    {   
        return <Stack onLayout={onLayoutRootView}/>
    }
}

export default Layout