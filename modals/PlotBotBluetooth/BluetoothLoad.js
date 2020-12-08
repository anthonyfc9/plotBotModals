import React, {useState} from 'react';
import {Image, TouchableOpacity, Text, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import styles from "./style.js";
import PlotConnect from "./PlotConnect.js"
function BluetoothLoad(props) {

    const [isConnectedWifi, setIsConnectedWifi] = useState(true);
    const [isVisible3, setIsVisible3] = useState(false);
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [plotConnecting, setPlotConnecting] = useState(false)

    const submitData=()=>{
        setIsVisible3(true)
    }
    const finishProcess=()=>{
        setPlotConnecting(true)
    }
    setTimeout(props.bluetoothConnected, 9000);


    return (
        <Modal
            backdropColor={"black"}
            backdropOpacity={0.5}
            hasBackdrop={true}
            style={styles.addDeviceBottomModal}
            animationType="slide"
            transparent={true}
            isVisible={props.isVisible2}
            onBackdropPress={() => props.setIsVisible2(false)}
            onRequestClose={() => {
                // this.closeButtonFunction()
            }}>

            <View
                style={{
                    height: '100%',
                    marginTop: 'auto',
                    backgroundColor: 'white'
                }}>

                {
                    !props.plotBot
                        ? <View>
                        <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => props.setIsVisible2(false)}
                                >
                                <Text>cancel</Text>
                            </TouchableOpacity>

                                <Image
                                    source={require('./../img/plotBluetooth.png')}
                                    style={styles.plotBluetooth}/>
                                <Image source={require('./../img/dots.gif')} style={styles.loadingDots}/>
                                <Text style={styles.h1Center}>Scanning for PlotBots</Text>

                            </View>
                        : !isConnectedWifi
                            ? <View>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => props.setIsVisible2(false)}
                                >
                                <Text>cancel</Text>
                            </TouchableOpacity>

                                    <Text style={styles.h1Center}>You're not connected to wifi</Text>
                                    <Image source={require('./../img/noWifi.png')} style={styles.noWifi}/>
                                    <Text style={styles.instructions}>Please connect to your wifi network and try again</Text>

                                </View>
                            : <View>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => props.setIsVisible2(false)}
                                >
                                <Text>cancel</Text>
                            </TouchableOpacity>

                                    <Text style={styles.h1Center}>
                                        Connecting Plotbot to wifi</Text>
                                        <Image source={require('./../img/wifi.png')} style={styles.noWifi}/>
                                    <Text style={styles.instructions}>Please enter your wifi password and user ID for your plotbot to connect</Text>
                             <TextInput
                                  style={styles.inputs}
                                  onChangeText={text => setPassword(text)}
                                  password={password}
                                  placeholder = "Password" 
                                  />
                             <TextInput
                                  style={styles.inputs}
                                  onChangeText={text => setUserId(text)}
                                 userId={userId}
                                 placeholder = "User-Id" 
                                  />
                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() => submitData()}
                                >
                                <Text>submit</Text>
                            </TouchableOpacity>

                                </View>

                }

            </View>
                                <PlotConnect isVisible3={isVisible3} setIsVisible3={setIsVisible3} finishProcess={finishProcess} plotConnecting={plotConnecting} setIsVisible2={props.setIsVisible2}/>
        </Modal>
    );
}

export default BluetoothLoad;