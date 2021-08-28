import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import Picture from './../assets/Images/avatar.jpg';
import Flag from './../assets/Images/FlagSN.png';


const AboutScreen = () => {
    
    return (

        <ScrollView showsVerticalScrollIndicator ={false} style={styles.ScrollContainer}>
            <View style={{ marginVertical: 40}}>
                <Image  source={Picture} 
                        style={{width:Dimensions.get("screen").width / 1.1, 
                                height:Dimensions.get("screen").width / 1.1,
                                borderRadius: Dimensions.get("screen").width,
                                marginLeft: 5
                            }} 
                />
            </View>


            <View style={styles.userContainer}>
                <Text style={styles.name}>Alpha amadou DIALLO</Text>
                <Text style={styles.job_country}>Développeur JavaScript</Text>
                <Text style={styles.job_country}>Dakar(SENEGAL<Image  source={Flag}
                                                                        style={{width:15, height:15}}/> )</Text>                
            </View>

            <View style={{marginTop:20}}>
                {/* <Text style={styles.textHobbies}>A propos de moi</Text> */}
                <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quam tempora provident, dicta laborum id alias praesentium! 
                        Ab numquam eum vitae magnam laboriosam voluptas vero 
                        delectus explicabo, soluta blanditiis omnis quisquam.</Text></View>

        </ScrollView>
    )
}

export default AboutScreen;


const styles = StyleSheet.create({
    userContainer:{
        width: Dimensions.get("screen").width,
        justifyContent: "center",
        alignItems:"center",

    },
    name:{
        fontWeight:"bold",
        fontSize: 20,
        letterSpacing: 1,
        marginBottom: 10,
        textTransform: "uppercase"
    },
    job_country:{
        fontSize:20,
        letterSpacing: 2,
        marginBottom: 10,
    },
    ScrollContainer:{
        backgroundColor:"#fff",
        paddingHorizontal: 10,
    },

    description:{
        fontSize: 14,
        textAlign: "center",
        letterSpacing:1,
        marginBottom:20,
    },
    textHobbies:{
        fontWeight:"bold", 
        fontSize:14, 
        letterSpacing:0.5, 
        marginVertical: 10,
        paddingVertical: 8,
        textAlign: "center",
        borderRadius: 20,
    },

})