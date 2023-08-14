import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

const BottomMenu = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
    //   onBackdropPress={onClose}
      backdropOpacity={0}
    >
      <View style={styles.modalContent}>
        
          
        <Text style={styles.title}>Bottom Menu</Text>
        <TouchableOpacity style={styles.option}>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
});

export default BottomMenu;
