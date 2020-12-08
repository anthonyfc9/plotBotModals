import React, {useState} from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from "./style.js"

function PlotConnect(props) {

    const [plotSuccess, setPlotSuccess] = useState(true);

    setTimeout(props.finishProcess, 4000);

    return (
        <Modal
            backdropColor={"black"}
            backdropOpacity={0.5}
            hasBackdrop={true}
            style={styles.addDeviceBottomModal}
            animationType="slide"
            transparent={true}
            isVisible={props.isVisible3}
            onBackdropPress={() => props.setIsVisible3(false)}
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
                    !props.plotConnecting
                        ? <View>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => {
                                        props.setIsVisible2(false);
                                        props.setIsVisible3(false)
                                    }}>
                                    <Text>cancel</Text>
                                </TouchableOpacity>

                                <Text style={styles.h1Center}>plot connecting to wifi</Text>

                            </View>
                        : !plotSuccess
                            ? <View>


                                    <Text style={styles.h1Center}>plotBot Connection Failed</Text>
                                    <Image source={require('./../img/deadbot.png')} style={styles.deadbot}/>
                                    <Text style={styles.instructions}>please try again and verify that you entered the correct wifi password</Text>
                                    <Text style={styles.instructions}>If this does not fix the issue there might be a problem with your PlotBot device</Text>
                                    <TouchableOpacity
                                        style={styles.continueButton}
                                        onPress={() => {
                                            props.setIsVisible2(false);
                                            props.setIsVisible3(false)
                                        }}>
                                        <Text>continue</Text>
                                    </TouchableOpacity>
                                </View>

                            : <View
                                    style={{
                                        marginTop: 40
                                    }}>
                         

                                    <Text style={styles.h1Center}>PlotBot connected successfully</Text>
                                    <Image source={require('./../img/partybot.png')} style={styles.partybot}/>
                                    <Text style={styles.instructions}>Success! everything worked, press continue to close this screen</Text>
                                    <TouchableOpacity
                                        style={styles.continueButton}
                                        onPress={() => {
                                            props.setIsVisible2(false);
                                            props.setIsVisible3(false)
                                        }}>
                                        <Text>continue</Text>
                                    </TouchableOpacity>
                                </View>

                }
            </View>

        </Modal>
    );
}

export default PlotConnect;