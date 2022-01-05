import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ActivityIndicator, Image ,ImageBackground, ScrollView, FlatList} from 'react-native';
import imgIcon from './../assets/Images/Icon.png';
import Icon from 'react-native-vector-icons/Feather';

const fullWidth = Dimensions.get('screen').width;
const fullHeight = Dimensions.get('screen').height * 0.2;

const DailyScreen = ({navigation, route}) => {


    const {humidity, moonrise, moonset, pressure, sunrise, sunset, temp, weather ,wind_deg, wind_gust, wind_speed}  = route.params;
    const ImageUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

    console.log(route.params)

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#002366"}}>
            <SafeAreaView style={styles.viewHeader}>
                <View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', marginBottom: 20}}>
                        <Icon name="arrow-left" onPress={()=> { navigation.navigate("HomeScreen") }} style={{color:'orangered' ,marginRight: 10}} size={20}/>
                        <Text style={{color: "#fff", fontWeight:"bold", letterSpacing: 1}}>Dakar (Jeudi)</Text>
                    </View>

                    <View style={styles.DetailsHeader}>
                        <Text style={{fontSize: 80,fontWeight:'normal',marginVertical: 0,color:'white'}}>18°C</Text>
                        {/* <Image  source={{uri: ImageUrl}} style={{width: 80, height: 80}}/> */}
                        <Text style={styles.textDescription}>{weather[0].description}</Text>
                    </View>
                </View>

                <View style={styles.LogoImg}>
                    <ImageBackground source={imgIcon} resizeMode="cover" style={{width:200, height:200}}/>
                </View>
            </SafeAreaView>

            <SafeAreaView style={styles.viewBody}>

                <View style={styles.viewSunMoon}>
                    <View style={styles.viewSun}>
                        <Icon name="sunrise" size={35} color="#fff"/>
                        <Text style={{color:"#fff", fontWeight: 'bold', marginBottom:10}}>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
                        <Icon name="sunset" size={35} color="orangered"/>
                        <Text style={{color:"orangered", fontWeight: 'bold'}}>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
                    </View>

                    <View style={styles.viewMoon}>
                        <Icon name="moon" size={35} color="#fff"/>
                        <Text style={{color:"#fff", fontWeight: 'bold', marginBottom:10}}>{new Date(moonrise * 1000).toLocaleTimeString()}</Text>
                        <Icon name="moon" size={35} color="orangered"/>
                        <Text style={{color:"orangered", fontWeight: 'bold'}}>{new Date(moonset * 1000).toLocaleTimeString()}</Text>

                    </View>
                </View>



            </SafeAreaView>
        </ScrollView>
    )
}

export default DailyScreen

const styles = StyleSheet.create({
    viewHeader:{
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingTop: 20
    },
    DetailsHeader:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    LogoImg:{
        position: "relative",
        bottom: "10%",
        left:"14%"

    },
    textDescription:{
        fontSize: 18,
        backgroundColor: 'orangered',
        color: '#fff',
        textTransform:'capitalize',
        padding: 5,
        letterSpacing: 1,
        borderRadius: 4,
        elevation: 4,
        marginTop: 20
    },
    


    viewBody:{
        backgroundColor: "yellow",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    viewSunMoon:{
        backgroundColor: 'greenyellow',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    viewSun:{
        flex:1,
        height: fullHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"space-evenly",
        alignItems: "center"
    },
    viewMoon:{
        flex:1,
        height: fullHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"space-evenly",
        alignItems: "center"
    },

})