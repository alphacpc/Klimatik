import React from 'react';
import { View, StyleSheet ,Text, SafeAreaView, TextInput , ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



const SearchScreen = ({navigation}) => {

    const countryList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
        <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
            
            <View style={styles.ViewInputText}>
                <Icon   name="search" size={20} 
                        color='orangered'
                        onPress={()=> navigation.navigate('ResultScreen')}/>
                <TextInput style={styles.ForTextInput} placeholder="Entrer une ville ..."/>
            </View>


            <SafeAreaView style={styles.CountryContainer}>
                {countryList.map( (value, index) => <View key={index} style={styles.SingleCountryView}>
                    <View style={styles.Box1}>
                        <View style={styles.BoxInfo}>
                            <Text style={styles.TextTemp}>22°</Text>
                            <Text style={styles.TextCity}>Dakar</Text>
                            <Text style={styles.TextCountry}>SN</Text>
                        </View>
                        <Icon name="sun" size={80} color="orangered"/>
                    </View>

                    <View style={styles.Box2}>
                        <View style={styles.TextIcon}><Icon name="cloud-rain" size={20} style={{marginRight:10}}/><Text>17%</Text></View>
                        <View style={styles.TextIcon}><Icon name="wind" size={20} style={{marginRight:10}}/><Text>7km/h</Text></View>
                    </View>
                </View>)}
            </SafeAreaView>
        </ScrollView>
    )
}

export default SearchScreen;


const styles = StyleSheet.create({
    ScrollContainer:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 40,
        backgroundColor: '#fff',      
    },
    ViewInputText:{
        display: 'flex',
        flexDirection: 'row',
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
        // backgroundColor: 'pink',
        width: Dimensions.get('screen').width / 2.2,
        marginBottom: 20,
        padding: 10,
        borderColor:'orangered',
        borderWidth:.1,
        borderRadius: 8
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
    },
    TextCity:{
        fontSize: 16,
    },
    TextCountry:{
        color:'grey'
    }
})