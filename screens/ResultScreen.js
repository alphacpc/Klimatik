import React from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const ResultScreen = ({navigation}) => {
    
    const numTemps = [1,2,3,4,5];


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollContainer}>
            <View style={styles.forHeader} >
                    <Icon   name="sun" 
                            size={28}
                            onPress={() => navigation.goBack()}/>
                    <Text> Dakar, Senegal(SN) </Text>
            </View>

            <View style={styles.SafeInfos}>
                <View style={{marginTop:20}}><Icon name="sun" color="orangered" style={{textAlign: 'center'}} size={120}/></View>
                <Text style={styles.Description}>Ensoleillé</Text>
                <Text style={styles.Temp}>20°C</Text>

                <View style={styles.TreeItem}>
                    <Text style={styles.TreeItemText}><Icon name="cloud-rain" size={20} style={{marginRight: 4}}/> 13%</Text>
                    <Text style={styles.TreeItemText}><Icon name="clock" size={20} style={{marginRight: 4}}/> 0.533mBar</Text>
                    <Text style={styles.TreeItemText}><Icon name="wind" size={20} style={{marginRight: 4}}/> 9km/h</Text>
                </View>
            </View>

            <View style={styles.ThisDayBox}>
                    <Text style={styles.ThisDayText}>Jeudi</Text>

                    <View style={styles.ThisDayTemps}>
                    {numTemps.map((value, index) => 
                            <View key={index} style={styles.ThisDayTemp}>
                                <Text style={styles.ThisDayTempTime}>12H</Text>
                                <Icon name="sun" color='orangered' size={30}/>
                                <Text style={styles.ThisDayTempValue}>19°</Text>
                            </View>
                    ) }
                    </View>
                </View>

                <View style={styles.NextDayItems}>
                    
                    {numTemps.map((value,index) => <View key={index} style={styles.NextDayItem}>
                            <Text style={styles.NextDayItemText}>Vendredi</Text>
                            <Icon name='sun' size={40} color='orangered'/>
                            <View style={styles.NextDayItemTemps}>
                                <Text style={styles.NextDayItemText}>19°</Text>
                                <Text style={styles.NextDayItemText,{color:'grey',marginLeft:10}}>14°</Text>
                            </View>
                        </View>                    
                    
                    )}
            </View>


            <View style={styles.ViewDetailInfos}>
                <View style={styles.ViewDetailItem}>
                    <Text style={styles.ViewDetailItemTitle}>Température</Text>
                    <Text style={styles.ViewDetailItemValue}>Celcius</Text>
                </View>

                <View style={styles.ViewDetailItem}>
                    <Text style={styles.ViewDetailItemTitle}>Vent</Text>
                    <Text style={styles.ViewDetailItemValue}>m/s</Text>
                </View>

                <View style={styles.ViewDetailItem}>
                    <Text style={styles.ViewDetailItemTitle}>Source</Text>
                    <Text style={styles.ViewDetailItemValue}>weatheopen.com</Text>
                </View>

            </View>

        </ScrollView>
    )
}

export default ResultScreen;

const styles = StyleSheet.create({
    ScrollContainer:{
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    forHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },

    SafeInfos:{
        width: '100%',
        textAlign:'center',
    },

    TreeItem:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
    },
    TreeItemText:{
        display:'flex',
        alignItems:'center',
        fontSize: 16,
        letterSpacing: 1,
    },
    Temp:{
        fontStyle:'italic',
        fontSize: 80,
        textAlign:'center',
        letterSpacing: 2,
    },
    Description:{
        textAlign:'center',
        fontSize:18,
        marginTop: 20,
        letterSpacing:1
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
    },



    ViewDetailInfos:{
        borderTopColor:'orangered',
        borderTopWidth:10,
        paddingTop: 20,
        marginTop: 20,
        paddingBottom: 60,
    },
    ViewDetailItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    ViewDetailItemTitle:{
        fontSize: 16,
    },
    ViewDetailItemValue:{
        color: 'grey',
        fontStyle:'italic'
    }




})