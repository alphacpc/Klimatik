import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, ScrollView} from 'react-native';
import imgIcon from './../assets/Images/Icon.png';
import Icon from 'react-native-vector-icons/Feather'

const HomeScreen = ({navigation}) => {

    const numTemps = [1,2,3,4,5];

    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=14.732386&units=metric&lon=-17.432757&appid=60f53a068c9a251eb46dcca88b6b407c';

    console.log(url)

    return (
        
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#ffffff'}} >
            <SafeAreaView style={HomeStyle.PanelHead}>
                <View style={HomeStyle.PanelHeadItem}>
                    <Text style={HomeStyle.CityName}>Dakar</Text>
                    <Text style={HomeStyle.CurrentTemp}>18°</Text>
                    <Text style={HomeStyle.CurrentWeather}>Nuagueux</Text>
                </View>

                <View style={HomeStyle.PanelHeadItem}>
                    <ImageBackground source={imgIcon} resizeMode="cover" style={{width:200, height:200, marginRight: -70, marginTop:-30}}/>
                </View>
            </SafeAreaView>

            <SafeAreaView style={HomeStyle.MainContent}>
                <View style={HomeStyle.TreeItem}>
                    <Text style={HomeStyle.TreeItemText}><Icon name="cloud-rain" size={20} style={{marginRight: 4}}/> 13%</Text>
                    <Text style={HomeStyle.TreeItemText}><Icon name="clock" size={20} style={{marginRight: 4}}/> 0.533mBar</Text>
                    <Text style={HomeStyle.TreeItemText}><Icon name="wind" size={20} style={{marginRight: 4}}/> 9km/h</Text>
                </View>
            
                <View style={HomeStyle.TimesUpDown}>                    
                    <Text style={HomeStyle.TimeText}>07:00 levé du soleil</Text>
                    <Text style={HomeStyle.TimeText}> 18:00 couché du soleil</Text>
                </View>


                <View style={HomeStyle.ThisDayBox}>
                    <Text style={HomeStyle.ThisDayText}>Jeudi</Text>

                    <View style={HomeStyle.ThisDayTemps}>
                    {numTemps.map((value, index) => 
                            <View key={index} style={HomeStyle.ThisDayTemp}>
                                <Text style={HomeStyle.ThisDayTempTime}>12H</Text>
                                <Icon name="sun" color='orangered' size={30}/>
                                <Text style={HomeStyle.ThisDayTempValue}>19°</Text>
                            </View>
                    ) }
                    </View>
                </View>

                <View style={HomeStyle.NextDayItems}>
                    
                    {numTemps.map((value,index) => <View key={index} style={HomeStyle.NextDayItem}>
                            <Text style={HomeStyle.NextDayItemText}>Vendredi</Text>
                            <Icon name='sun' size={40} color='orangered'/>
                            <View style={HomeStyle.NextDayItemTemps}>
                                <Text style={HomeStyle.NextDayItemText}>19°</Text>
                                <Text style={HomeStyle.NextDayItemText,{color:'grey',marginLeft:10}}>14°</Text>
                            </View>
                        </View>                    
                    
                    )}


                </View>

            </SafeAreaView>

        </ScrollView>
    )
}

export default HomeScreen;



const HomeStyle = StyleSheet.create({
    PanelHead:{
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
    },
    CurrentTemp:{
        fontSize: 80,
        fontWeight:'normal',
        marginVertical: 0,
    },
    CurrentWeather:{
        fontSize: 18,
        backgroundColor: 'orangered',
        color: '#fff',
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
    },


    TimesUpDown:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom: 40,
    },
    TimeText:{
        letterSpacing: 1
    },

    
    
    ThisDayBox:{
        
    },
    ThisDayText:{
        color: 'orangered',
        fontSize: 24,
        marginBottom: 0,
    },
    ThisDayTemps:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    ThisDayTemp:{
        width: Dimensions.get('screen').width / 7.4,
        textAlign:'center'
    },
    ThisDayTempTime:{
        fontSize: 18,
        paddingVertical: 10,
        letterSpacing: 2,
    },
    ThisDayTempValue:{
        fontSize: 18,
        paddingVertical: 10,
        letterSpacing: 2,
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
    }

})