import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Login = ({navigation} ) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
  <Image
    style= {{
      borderRdius: 20,
      marginBottom: 60,
      width: 250,
      height: 250,
    }}
  source= {{ 
    uri: "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8am9yZGFuJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
 }}
 />
 <Text style={{ fontsize: 30, color: "#cc9c0"}}> Welcome</Text>
 <Text style={{ fontSize: 40, fontWeight: "bold"}}>Jigga's SNEAKER HAVEN</Text>
 <View style={{}}>
   < TextInput
   style={{
     padding: 15,
     borderRadius: 10,
     borderWidth: 0.7,
     paddingHorizontal: 60,
   }}
   placeholder=" Enter your username"
   />
   </View>
   <View style={{ marginTop: 10,}}>
     <TextInput
     secureTextEntry={true}
     onChangeText={(
       e
     )=> {
       console.log(e)
     }}
     style={{
       padding: 15,
       borderRadius: 10,
       borderWidth: 0.7,
       paddingHorizontal: 60,
     }}
     placeholder="Enter your Password"
     />
     </View>
     <TouchableOpacity
      onPress={() => {
       navigation.navigate("Home");
     }}
     style={{
       padding: 15,
       padddingHorizontal: 80,
       marginTop: 10,
       alignItems: "center",
       borderRadius: 10,
       flexDirection: "row",
       backgroundColor: "black",
     }}
     >
       <AntDesign name="apple1" size={24} color="white" />
       <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
       </TouchableOpacity>
       </View>
    


    
  )
}
export default Login 