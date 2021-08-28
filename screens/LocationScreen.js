import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions,StatusBar} from 'react-native';

import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import Styles from './../constants/Styles';

const LocationScreen = () => {

    const [region] = useState({
        latitude: 14.773138461120457,
        longitude: -17.35838392533458,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
    })

    return (
        <SafeAreaView style={Styles.container}>
             <StatusBar hidden/>
              <MapView
                style={styles.map}
                initialRegion={region}
                showsUserLocation={true}
                provider = "google"
            >
                <Marker coordinate={{
                    latitude: 14.773138461120457,
                    longitude: -17.35838392533458,
                }} pinColor='orangered'>
                    <Callout style={styles.Callout}>
                        <Text style={styles.Address}>Adresse de residence</Text>
                    </Callout>
                </Marker>

                <Circle
                    center={{latitude: 14.773138461120457, longitude: -17.35838392533458}}
                    radius={20}
                    strokeColor='orangered'
                    fillColor='orangered'
                />

            </MapView>
        </SafeAreaView>
    )
}

export default LocationScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002366',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      marginLeft:-20,
      marginTop:-30,
    },

    Address:{
        color:'#000'
    }
});
