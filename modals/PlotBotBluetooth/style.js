import {
  StyleSheet,

} from "react-native";


const styles = StyleSheet.create({

  h1Center:{
      marginRight:"auto",
      marginLeft:"auto",
      fontSize: 24,
      fontWeight: '600',
      marginTop:20,
      color:"grey",
      alignItems: "center",

    },
    h1: {
      fontSize: 24,
      fontWeight: '600',
      color:"grey",
    
    },
    topAddDevice:{
      width: "100%",
      height:60,
      backgroundColor:"orange",
    },
    topAddDeviceButton:{
      marginTop:15,
      marginLeft:"80%",
      padding:5,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      width: 60,
      height:30,
    },
    addDeviceBottomModal:{
      width:"100%",
      margin:0,
    },
    plotBottomHalfIcon:{
      width:80,
      height:80,
      margin:10,
    },
    displayFlex:{
      display:"flex",
      flexDirection:"row",
    },
    bottomHalfContainer:{
      paddingTop:20,
      paddingLeft:20,
    },
    p:{
      width:"60%",
      color:"grey",
    },
    // bluetoothModal start
    plotBluetooth:{
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:"20%",
      width:200,
      height:200,

    },

    loadingDots:{
      marginLeft:"auto",
      marginRight:"auto"
    },
    noWifi:{
      marginLeft:"auto",
      marginRight:"auto",
      width:350,
      height:350,

    },

    inputs:{
      marginLeft:"auto",
      marginRight:"auto",
      width:250,
      height: 40,
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
      marginBottom:15
    },
    instructions:{
      marginLeft:"auto",
      marginRight:"auto",
      width:300,
      color:"grey",
      fontSize:16,
      marginBottom:15,
      textAlign:'center'
    },
    submitButton:{
      marginTop:10,
      marginLeft:"auto",
      marginRight:"auto",
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding:10,
      borderRadius:100
    },
    cancelButton:{
      marginTop:20,
      marginLeft:20,
      marginRight:"auto",
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding:10,
      borderRadius:100
    },
    continueButton:{
      marginTop:20,
      marginLeft:"auto",
      marginRight:"auto",
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding:10,
      borderRadius:100
    },
    deadbot:{
      marginTop:20,
      marginBottom:40,
      marginLeft:"auto",
      marginRight:"auto",
      width:200,
      height:200,
    },
    partybot:{
      marginTop:"20%",
      marginBottom:40,
      marginLeft:"auto",
      marginRight:"auto",
      width:200,
      height:200,
    }

  });

  export default styles;


