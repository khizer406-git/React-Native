import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const ModalComponent = ({confirmationVisible,showPhoneNumber,closeConfirmation}) => {


  return (
    <View style={styles.container}>
      
      {/* Confirmation modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmationVisible}
        onRequestClose={closeConfirmation}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Confirm Your Number</Text>
            <Text style={{marginBottom:10,color:'black'}}>The Number you enter is Correct ?</Text>
            <TouchableOpacity onPress={(e) => closeConfirmation("yes")} style={styles.button}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => closeConfirmation("no")} style={[styles.button,{backgroundColor:'none',borderColor:'#4b3acc',borderWidth:1}]}>
              <Text style={[styles.buttonText,{color:'#4b3acc'}]}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  confirmButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4b3acc',
    margin:5,
    padding: 10,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',}
});

export default ModalComponent;
