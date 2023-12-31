import { View,TextInput, FlatList,StyleSheet,Text, Pressable, ScrollView } from "react-native";
import { OPERATOR_DATA } from "../constants/data";
import { useEffect, useState } from "react";

export default function DropDown({data,placeholder,listActive,listActivehandler,pressHandler,selectedval}){
    
    useEffect(()=>{
       if(selectedval.length>0){
        listActivehandler(false)
     }
    },[selectedval])


    const renderItem=(item)=>{
       return(
          <Text style={styles.textDrop} onPress={()=>pressHandler(item.item.label)}>{item.item.label}</Text>
       )
  

    }

    


return(


   <>
   <View style={styles.inputContainer}>
      {/* <TextInput
    //   onChangeText={changeHandler}
       value={selectedval}
    //    type="text"
       placeholder={placeholder}
       onPressIn={()=>listActivehandler(true)}
        
      /> */}
      <Text style={styles.text} onPress={()=>listActivehandler(true)}>{selectedval ||placeholder}</Text>

   </View>
   
  {
    listActive &&
    <View style={styles.dataContainer}>
        <FlatList
           data={OPERATOR_DATA}
           keyExtractor={(item)=>item.id}
           renderItem={(item)=>renderItem(item)}
        
        />
      </View>
  }

     

   
   
   
   </>
)


}

const styles=StyleSheet.create({
    inputContainer:{
        borderBottomWidth:2,
        borderColor:"black",
       fontSize:20,
        borderRadius:10,
        paddingVertical:10,
        marginVertical:20,


    },
    text:{
      fontSize:20,
      color:'blue'
    },
    textDrop:{
        fontSize:16,
        width:250,
        paddingHorizontal:30,
        paddingVertical:3,
        color:'white',
       
       
       
    },
    dataContainer:{
        position:"relative",
        left:50,
        top:-20,
        width:250,
        marginTop:-10,
        height:100,
        backgroundColor:'#25272a',
        borderRadius:10
        
    }
   

})
