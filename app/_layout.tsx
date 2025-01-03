import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import React, { useCallback } from 'react'
import { SafeAreaView, View } from "react-native"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;


    return (
        <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <Stack />
        </SafeAreaView>
    )
}
