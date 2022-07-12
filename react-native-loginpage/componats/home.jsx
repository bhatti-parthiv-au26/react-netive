import React ,{useState}from 'react';
import {View, Text,StyleSheet,TextInput,LogBox} from 'react-native';
import { TextInput } from 'react-native-web';
import { CheckBox, TouchableOpacity } from 'react-native-web';

const Home = () => {
    const [username, setusername] = useState("");
    console.log(username);
    const [password, setpassword] = useState("");   //useState is a hook that is used to create a state variable.
    const [agree, setagree] = useState(false);


    console.log(username,password);

    const submit = () => {
        if(username == "parthiv" && password == "123"){
            alert("Login Successful");

    }else{
        alert("Login Failed");
    };
    }



    return (
        <View style={styles.maincontainer}>
            <Text style={styles.maincontainer}>login from</Text>
            <text style={styles.description}>
                welcome to the app
            </text>
            <view style={styles.inputcontainer}>
                <text style={styles.inputcontainer}>
                    username
                </text>
                <TextInput style={styles.inputstyle} 
                    autocapitalize="none"
                    autocorrect={false}
                    value={username}
                    onChangeText={(actualdata) => setusername(actualdata)}
                />
            </view>
            <view style={styles.inputcontainer}>
                <text style={styles.inputcontainer}>
                    password
                </text>
                <TextInput style={styles.inputstyle} 
                    autocapitalize="none"
                    autocorrect={false}
                    secureTextEntry={true}
                    value = {password}
                    onChangeText={(actualdata) => setpassword(actualdata)}
                />
             
            </view>
            <view style={styles.wrapper} >
                <CheckBox
                    value={agree}
                    onValueChange={() => setagree(!agree)}
                    color ={agree ? "#4630EB" : undefined}
                />
                <text style={styles.wrappertext} >
                    i have agree !
                </text>
                <TouchableOpacity style={[styles.buttonstyle
                ,{
                  backgroundColor : agree ? "#4630EB" : "grey"  
                }
                ]}
                disabled={!agree}
                onpress={()=> submit} >
                    <text>
                        forget password
                    </text>
                </TouchableOpacity>
            </view>

        </View>
    );
}

const styles = StyleSheet.create({

    maincontainer: {
        height: "100%",
        paddingHorizontal:30,
        peddingtop:30,
        backgroundColor: '#fff',
    },

    mainheader: {
        fontSize: 25,
        fontWeight: "500",
        color: "#000",
        paddingTop: 30,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontFamily: "bold",
    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        peddingbottom: 20,
        lineHeight: 25,
        fontFamily: "regular",
    },

    labels: {
        fontSize: 15,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: "regular",
    },

    inputstyle: {
        borderWidth: 1,
        borderColor: "rgb(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
        fontFamily: "regular",
        fontsize: 18,
    },

    commontext: {
        fontSize: 15,
        color: "#7d7d7d",
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },




})


export default Home;




