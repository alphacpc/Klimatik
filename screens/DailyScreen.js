import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions ,ImageBackground, ScrollView, FlatList} from 'react-native';
import imgIcon from './../assets/Images/Icon.png';
import Icon from 'react-native-vector-icons/Feather';



const fullWidth = Dimensions.get('screen').width;

const DailyScreen = ({navigation, route}) => {

    const {humidity, moonset, pressure, sunrise, sunset, temp, weather, dt ,wind_deg, wind_speed}  = route.params;
    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    const Temperature = ({item}) => {
        return <View style={styles.viewTemp} key={item}>
            <Text style={styles.textValue}>{Math.round(temp[item])}</Text>
            <Text style={styles.textLabel}>{item}</Text>
        </View>
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#002366"}}>
            <SafeAreaView style={styles.viewHeader}>
                <View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', marginBottom: 20}}>
                        <Icon name="arrow-left" onPress={()=> { navigation.navigate("HomeScreen") }} style={{color:'orangered' ,marginRight: 10}} size={20}/>
                        <Text style={{color: "#fff", fontWeight:"bold", letterSpacing: 1}}>Dakar ({days[new Date(dt * 1000).getDay()]})</Text>
                    </View>

                    <View style={styles.DetailsHeader}>
                        <Text style={{fontSize: 80,fontWeight:'normal',marginVertical: 0,color:'white'}}>18°C</Text>
                        <Text style={styles.textDescription}>{weather[0].description}</Text>
                    </View>
                </View>

                <View style={styles.LogoImg}>
                    <ImageBackground source={imgIcon} resizeMode="cover" style={{width:200, height:200}}/>
                </View>
            </SafeAreaView>

            <SafeAreaView style={styles.viewBody}>

                <View style={styles.viewSunMoon}>
                    <View style={styles.simpleView}>
                        <Icon name="sunrise" size={35} color="orangered"/>
                        <Text style={{color:"orangered",letterSpacing:1.8, marginTop:10}}>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
                    </View>
                    
                   <View style={styles.simpleView}>
                        <Icon name="moon" size={35} color="orangered"/>
                        <Text style={{color:"orangered", letterSpacing:1.8,marginTop:10}}>{new Date(moonset * 1000).toLocaleTimeString()}</Text>
                   </View>

                   <View style={styles.simpleView}>
                        <Icon name="sunset" size={35} color="orangered"/>
                        <Text style={{color:"orangered", letterSpacing:1.8,marginTop:10}}>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
                   </View>              
                </View>


                <View style={styles.viewTemps}>
                    <Text style={styles.textLabelView}>Températures</Text>
                    <FlatList
                        data={Object.keys(temp)}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor = {item => `${item[0]}`}
                        renderItem ={ ({item}) => <Temperature item={item} />}
                        style={{ display:"flex",flexDirection:"row", paddingHorizontal: 10,paddingVertical:20}}
                    />
                </View>

                <Text style={styles.textLabelView}>Vent</Text>
                <View style={styles.viewWind}>
                    <Icon name="wind" onPress={()=> { navigation.navigate("HomeScreen") }} style={{color:'white' ,marginRight: 10}} size={80}/>
                    <View style={styles.viewWindInfos}>
                        <View style={styles.viewWindItem}>
                            <Text style={styles.textWindLabel}>Vitesse du vent</Text>
                            <Text style={styles.textWindValue}>{Math.round(wind_speed)} km/h</Text>
                        </View>
                        <View style={styles.viewWindItem}>
                            <Text style={styles.textWindLabel}>degré du vent</Text>
                            <Text style={styles.textWindValue}>{wind_deg} deg</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.viewHumidity}>          
                    <View style={styles.viewHumidityItem}>
                        <Icon name="cloud-rain" size={40} style={{marginRight: 4, color:"white"}}/>
                        <Text style={styles.textHumidity}>{humidity}%</Text>
                    </View>
                    <View style={styles.viewHumidityItem}>
                        <Icon name="clock" size={40} style={{marginRight: 4, color:"white"}}/>
                        <Text style={styles.textHumidity}>{pressure / 1000}mBar</Text>
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
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    viewSunMoon:{
        flexDirection:'row',
        justifyContent:'space-around',

    },
    simpleView:{
        display:'flex',
        flexDirection:"column",
        alignItems:"center"
    },



    viewTemp:{
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight:30

    },
    textValue:{
        backgroundColor:'#fff',
        fontSize:20,
        borderRadius:20,
        color: 'orangered',
        marginBottom: 10,
        padding: 10,
        fontWeight: 'bold'
    },
    textLabel:{
        color: "#fff",
        fontSize: 20,
    },


    viewTemps:{
        paddingVertical: 30
    },
    textLabelView:{
        color:"white",
        fontSize:26,
        fontWeight:"bold",
        letterSpacing:1
    },


    viewWind:{ 
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:10
    },
    viewWindInfos:{
        width: fullWidth / 1.8,
    },
    viewWindItem:{
        paddingVertical:15,
    },
    textWindLabel:{
        fontSize:20,
        marginBottom:10,
        color:"white"
    },
    textWindValue:{
        fontSize:15,
        color:"orangered"
    },


    viewHumidity:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:15
    },
    viewHumidityItem:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems: "center",
        paddingVertical:20,
        paddingHorizontal:15
    },
    textHumidity:{
        color:"white",
        fontSize:18,
        marginTop: 20
    }

})
