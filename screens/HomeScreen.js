import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ActivityIndicator, Image ,ImageBackground, ScrollView, FlatList} from 'react-native';
import imgIcon from './../assets/Images/Icon.png';
import Icon from 'react-native-vector-icons/Feather'
import axios from 'axios';
import KEY_API from './../constants/Secret';

const HomeScreen = ({navigation}) => {

    const [datasCountry, setDatasCountry] = useState([]);

    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    
    const Hourly = ({item}) => {

        const ImageUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

        return  <View style={HomeStyle.ThisDayTemp}>
                    <Text style={HomeStyle.ThisDayTempTime}>{new Date(item.dt *1000).getHours()}H</Text>
                    <Image  source={{uri: ImageUrl}} style={{width: 40, height: 40}}/>
                    <Text style={HomeStyle.ThisDayTempValue}>{Math.round(item.temp)}°</Text>
                </View>
    }

    const Daily = ({item}) => {

        const ImageUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

        return  <View style={HomeStyle.NextDayItem}>
                    <Text style={HomeStyle.NextDayItemText}>{days[new Date(item.dt * 1000).getDay()]}  </Text>
                    <Image  source={{uri: ImageUrl}} style={{width: 60, height: 60}}/>
                    
                    <View style={HomeStyle.NextDayItemTemps}>
                        <Text style={HomeStyle.NextDayItemText, {color:'grey',marginRight:10}}>{Math.round(item.temp.min)}°</Text>
                        <Text style={HomeStyle.NextDayItemText}>{Math.round(item.temp.eve)}°</Text>
                        <Text style={HomeStyle.NextDayItemText, {color:'grey',marginLeft:10}}>{Math.round(item.temp.max)}°</Text>
                    </View>

                    <Icon name="arrow-right-circle" onPress={()=> { navigation.navigate("DailyScreen", item) }} style={{color:'orangered'}} size={20}/>
                </View>                    
    }

    const getDatas = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=14.732386&units=metric&lon=-17.432757&lang=fr&appid=${KEY_API}`);
            const myData = await response.data;
            console.log(myData.current.temp)
            console.log(myData.current.weather[0].description)
            setDatasCountry(myData);
        }
        catch(e){
            console.log(e);
        }
    }
    
    useEffect( () => {
        getDatas();
    },[])

    console.log(datasCountry)
    console.log(datasCountry.current)
    if(datasCountry.length == 0){
        return <SafeAreaView style={HomeStyle.LoaderSafeView}>
                    <ActivityIndicator size={50} color="orangered"  />
        </SafeAreaView>
    }

    const colors = ['#022E57', '#293B5F','#002366']

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#002366'}} >
            <SafeAreaView style={HomeStyle.PanelHead}>
                <View style={HomeStyle.PanelHeadItem}>
                    <Text style={HomeStyle.CityName}>Dakar</Text>
                    <Text style={HomeStyle.CurrentTemp}>{Math.round(datasCountry.current.temp)}°</Text>
                    <Text style={HomeStyle.CurrentWeather}>{datasCountry.current.weather[0].description}</Text>
                </View>

                <View style={HomeStyle.PanelHeadItem}>
                    <ImageBackground source={imgIcon} resizeMode="cover" style={{width:200, height:200, marginRight: -70, marginTop:-30}}/>
                </View>
            </SafeAreaView>

            <SafeAreaView style={HomeStyle.MainContent}>
                <View style={HomeStyle.TreeItem}>
                    <Text style={HomeStyle.TreeItemText}><Icon name="cloud-rain" size={20} style={{marginRight: 4}}/> {datasCountry.current.humidity}%</Text>
                    <Text style={HomeStyle.TreeItemText}><Icon name="clock" size={20} style={{marginRight: 4}}/> {datasCountry.current.pressure / 1000}mBar</Text>
                    <Text style={HomeStyle.TreeItemText}><Icon name="wind" size={20} style={{marginRight: 4}}/> {Math.round(datasCountry.current.wind_speed)} km/h</Text>
                </View>
            
                <View style={HomeStyle.TimesUpDown}>                    
                    <Text style={HomeStyle.TimeText}>{new Date(datasCountry.current.sunrise * 1000).toLocaleTimeString()} levé du soleil</Text>
                    <Text style={HomeStyle.TimeText}> {new Date(datasCountry.current.sunset * 1000).toLocaleTimeString()} couché du soleil</Text>
                </View>


                <View style={HomeStyle.ThisDayBox}>
                    <Text style={HomeStyle.ThisDayText}>Aujourd'hui</Text>
                    
                    <View style={HomeStyle.ThisDayTemps}>

                    <FlatList
                        data={datasCountry.hourly}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor = {item => `${item.id}`}
                        renderItem ={ ({item}) => <Hourly item={item} />}
                    />
                    </View>

                </View>

                <View style={HomeStyle.NextDayItems}>
                    <FlatList
                        data={datasCountry.daily}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor = {item => `${item.id}`}
                        renderItem ={ ({item}) => <Daily item={item} />}
                    />

                </View>

            </SafeAreaView>

        </ScrollView>
    )
}

export default HomeScreen;



const HomeStyle = StyleSheet.create({
    LoaderSafeView:{
        backgroundColor: '#002366',
        height: Dimensions.get('screen').height,
        display:'flex',
        justifyContent:'center'
    }



    ,PanelHead:{
        display: 'flex',
        flexDirection:'row',
        width: Dimensions.get('screen').width,
    },
    PanelHeadItem:{
        width: Dimensions.get('screen').width / 2,
        height: Dimensions.get('screen').width / 2,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    CityName:{
        fontSize: 22,
        textTransform:'capitalize',
        letterSpacing: 1,
        paddingTop: 40,
        color:'white'
    },
    CurrentTemp:{
        fontSize: 80,
        fontWeight:'normal',
        marginVertical: 0,
        color:'white'

    },
    CurrentWeather:{
        fontSize: 18,
        backgroundColor: 'orangered',
        color: '#fff',
        textTransform:'capitalize',
        padding: 5,
        letterSpacing: 1,
        borderRadius: 4,
        elevation: 4,
    },

    MainContent:{
        width: Dimensions.get('screen').width,
        paddingRight: 10,
        paddingLeft: 10,
    },
    TreeItem:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 40,
    },
    TreeItemText:{
        display:'flex',
        alignItems:'center',
        fontSize: 16,
        letterSpacing: 1,
        color:'white'

    },


    TimesUpDown:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom: 40,
    },
    TimeText:{
        letterSpacing: 1,
        color:'white'
    },

    
    
    ThisDayBox:{
        
    },
    ThisDayText:{
        color: 'orangered',
        fontSize: 22,
        marginBottom: 0,
    },
    ThisDayTemps:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    ThisDayTemp:{
        width: Dimensions.get('screen').width / 7,
        marginRight: 20,
        backgroundColor:'orangered',
        borderRadius: 8,
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center'
    },
    ThisDayTempTime:{
        fontSize: 18,
        paddingVertical: 10,
        letterSpacing: 2,
        color:'white',
        textAlign:'center'
    },
    ThisDayTempValue:{
        fontSize: 18,
        paddingVertical: 10,
        letterSpacing: 2,
        color:'white',
        textAlign:'center'
    },



    NextDayItems:{
        display:'flex',
        flexDirection:'column',
        marginTop: 34,
    },
    NextDayItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: 10,
    },
    NextDayItemTemps:{
        display:'flex',
        flexDirection:'row',
    },
    NextDayItemText:{
        letterSpacing: 1,
        fontSize: 16,
        color:'#ffffff'
    }

})