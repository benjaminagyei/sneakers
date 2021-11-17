import React from 'react';
import { View, Text,Image } from 'react-native';

const Cart = ({navigation}) => {

    return(
        <View>
<Image
            source={require("C:\\Users\\Adom Kubi\\Desktop\\sneakers\\assets\\gold.jpg")}
            style={{ width: 300, height: 270, resizeMode: "contain" ,}}
            
          />
          <TextInput
            placeholder={"Enter name"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
              marginTop:20,
            }}
          />
          <TextInput
            placeholder={"Enter card details"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={"Enter pin"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={"CC"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={"Card expiry date"}
            style={{
              height: 42,
              width: "100%",
              borderbottomWidth: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#a6a6a6",
              marginBottom: 20,
            }}
          />
          <TouchableOpacity
            onPress={simpleAlertHandler }
            style={{
              backgroundColor: "#b4ac7e",
              paddingHorizontal: 20,
              paddingVertical: 5,
              width: "50%",
              borderRadius: "25%",
              justifyContent: "center",
              marginTop: 10,
              height:"7%",
              marginLeft: "24%",
            }}
          >
            <Text style={{ width: "100%", borderRadius: 5,justifyContent:"center",paddingLeft:20,}}>Pay now</Text>
          </TouchableOpacity> 
             
        </View>
    );
}

export default Cart;