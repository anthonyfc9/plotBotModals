import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Modal from 'react-native-modal';
import styles from "./style.js"
import BluetoothLoad from './BluetoothLoad.js'
const PlotBotConnection = () => {


  const [ModalVisible, setModalVisible] = useState(false);
  const [isVisible2,setIsVisible2] = useState(false)
  const [plotBot,setPlotBot] = useState(false)
  const bluetoothConnected = () =>{
     setPlotBot(true);
  }

  const toggleModal = () => {
    setModalVisible(!ModalVisible);
  };


  return (
    <View style={styles.centeredView}>


              <View style={styles.topAddDevice}>
                  
          <TouchableOpacity
          style={styles.topAddDeviceButton}
          onPress={() => toggleModal()}
          >
          <Text>ADD</Text>
          </TouchableOpacity>
                    <Modal
                    backdropColor={"black"}
                    backdropOpacity={0.4}
                    hasBackdrop={true}
                    style={styles.addDeviceBottomModal}
                  animationType="slide"
                  transparent={true}
                  isVisible={ModalVisible}
                  onBackdropPress={() => setModalVisible(false)}
                  onRequestClose={() => {
                    // this.closeButtonFunction()
                  }}>

                
                  <View
                    style={{
                      height: '15%',
                      marginTop: 'auto',
                      backgroundColor:'white'
                    }}>
                    <TouchableOpacity onPress={()=> setIsVisible2(true)}>
                    <View style={styles.displayFlex}>
                  
                    <Image source={require('./img/plotbot.png')} style={styles.plotBottomHalfIcon} />
                    <View style={styles.bottomHalfContainer}>
                    <Text style={styles.h1}>Search for PlotBots</Text>
                    <Text style={styles.p}>Make sure to press the bluetooth button on your plotbot!</Text>
                    </View>
              

                    </View>
                    </TouchableOpacity>
                  </View>
                 
                </Modal>

                    <BluetoothLoad isVisible2={isVisible2} setIsVisible2={setIsVisible2} bluetoothConnected = {bluetoothConnected} plotBot = {plotBot}/>
          </View>

        

    </View>
  );
};

export default PlotBotConnection;