import React, { useLayoutEffect, useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
export default function Layout({ props, navigation }) {
    // console.log("layout");
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                // backgroundColor: colors.white,
                shadowColor: "transparent",
                elevation: 0,
            },
        });
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar barStyle={'light-content'} />
            {props}
        </SafeAreaView>
    )
}