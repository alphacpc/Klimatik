import React, { useState, useEffect} from 'react';
import axios from 'axios';
import KEY_API from './../constants/Secret';

import { View, StyleSheet ,Text, SafeAreaView, ActivityIndicator,TextInput , ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


    
const shortList = [
    {
        name:"Sao Paulo",
        code:"BR",
        lat: -23.533773,
        log: -46.625290,
    },  
    {
        name:"New York",
        code:"USA",
        lat: 40.713051,
        log: -74.007233,
    },
    {
        name:"Lagos",
        code:"NG",
        lat: 6.451140,
        log: 3.388400,
    },
    {
        name:"Londres",
        code:"UK",
        lat: 51.507351,
        log: -0.127758,
    },
    {
        name:"Moscou",
        code:"RU",
        lat: 55.644466,
        log: 37.395744,
    },
    {
        name:"New Dehli",
        code:"IN", 
        lat: 28.644800,
        log: 77.216721,
    },
    {
        name:"Los Angeles",
        code:"USA",
        lat: 34.052235,
        log: -118.243683,
    },
    {
        name:"Seoul",
        code:"KR",
        lat: 37.532600,
        log: 127.024612,
    },
] 



const SearchScreen = ({navigation}) => {

    const [valInput] = useState("");
    const [datasCountry, setDatasCountry] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const tabs = []


    const getDataByCountry= async (item) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${item.lat}&units=metric&lon=${item.log}&lang=fr&appid=${KEY_API}`);
            const data = await response.data;
            tabs.push(data.current)
            setDatasCountry(data.current);
            console.log(tabs.length)
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() => {

        shortList.map((item)=> getDataByCountry(item));

    }, [loaded])

    console.log(loaded)

    return (
        (loaded)? (
            <SafeAreaView style={styles.LoaderSafeView}>
                    <ActivityIndicator size={50} color="orangered"  />
            </SafeAreaView>
        ) : (
            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
            
                <View style={styles.ViewInputText}>
                    <Icon   name="search" size={20} 
                            color='orange'
                            onPress={()=> navigation.navigate('ResultScreen',{country:valInput})}/>
                    <TextInput style={styles.ForTextInput} value={valInput} placeholder="Entrer une ville ..."/>
                </View>


                <SafeAreaView style={styles.CountryContainer}>
                    { shortList.map( (item, index) => <View key={index} style={styles.SingleCountryView}>
                        <View style={styles.Box1}>
                            <View style={styles.BoxInfo}>
                                <Text style={styles.TextTemp}>{Math.round(datasCountry.temp)}°C</Text>
                                <Text style={styles.TextCity}>{item.name}</Text>
                                <Text style={styles.TextCountry}>{item.code}</Text>
                            </View>
                            <Icon name="sun" size={60} color="orangered"/>
                        </View>

                        <View style={styles.Box2}>
                            <View style={styles.TextIcon}><Icon name="cloud-rain" size={20} style={{marginRight:10}}/><Text>{datasCountry.humidity}17%</Text></View>
                            <View style={styles.TextIcon}><Icon name="wind" size={20} style={{marginRight:10}}/><Text>{datasCountry.pressure}km/h</Text></View>
                        </View>
                    </View>) }
                </SafeAreaView>
            </ScrollView>
        )
    )
}

export default SearchScreen;


const styles = StyleSheet.create({
    ScrollContainer:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 40,
        backgroundColor: '#002366',      
    },
    ViewInputText:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        elevation: 0.5
    },
    ForTextInput:{
        marginLeft: 10,
        borderColor: 'transparent',
        width: '85%',
        borderWidth: 0,
        letterSpacing: 2,
    },
    CountryContainer:{
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        marginBottom: 40,
    },
    SingleCountryView:{
        backgroundColor: '#F8F8F8',
        width: Dimensions.get('screen').width / 2.2,
        marginBottom: 20,
        padding: 10,
        borderRadius: 4
    },

    Box1:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    Box2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 20,
    },
    TextIcon:{
        display:'flex',
        flexDirection:'row',
    },

    TextTemp:{
        fontSize: 44,
        color:'#000'
    },
    TextCity:{
        fontSize: 16,
        color:'#000'

    },
    TextCountry:{
        color:'grey'
    },


    LoaderSafeView:{
        backgroundColor: '#002366',
        height: Dimensions.get('screen').height,
        display:'flex',
        justifyContent:'center'
    }
})