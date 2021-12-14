import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DailyScreen = ({navigation, route}) => {


    const {humidity, moonrise, moonset, pressure, sunrise, sunset, temp, wind_deg, wind_gust, wind_speed}  = route.params;

    console.log(humidity,temp,moonset)
    return (
        <View>
            <Text>Hello word</Text>
        </View>
    )
}

export default DailyScreen

const styles = StyleSheet.create({})
