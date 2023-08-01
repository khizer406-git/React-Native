import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Image,Alert } from 'react-native';
import axios from 'axios';

function AddToCartPage({navigation,route}:any) {
    
    // type Product = {
    //     productName: string;
    //     productPrice: number;
    //     productID: number;
    //     category: string;
    //     imageUrl: string;
    // };

    type Product = {
      category: string;
      imageUrl: string;
      productID: number;
      productName: string;
      productPrice: number;
  };

    const [data, setData] = useState<Product[]>();

    
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const {cart} = route.params
        setData(cart)
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    },[])

    let total: number = 0;
    const getTotalCost = () => {
      
      if (data) {
        for (let i = 0; i < data.length; i++) {
          let temp: number = data[i].productPrice;
          total = parseFloat(temp) + parseFloat(total);
        }
      }
      return total.toFixed(2);
    };
    
    

  // Component to render each product item
  const renderProductItem = ({ item,index }: any) => (
    <View style={styles.container}>
        <Text style={styles.text}>{index}</Text>
        <Text style={styles.text}>Product Name: {item.productName}</Text>
        <Text style={styles.text}>Product Price: {item.productPrice} PKR</Text>
        <Text style={styles.text}>Product ID: {item.productID}</Text>
        <Text style={styles.text}>Product Category: {item.category}</Text>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
  </View>
  );
    
    const notify = async () => {
      await axios
        .post(`https://app.nativenotify.com/api/notification`, {
          appId: 8547,
          appToken: "yLVM0dAAzp84pkAt1M7C5z",
          title: `Order Received of Amount: ${total} PKR`,
          body: `Order SuccessFull`,
          dateSent: new Date().toLocaleTimeString(),
          pushData: { yourProperty: "yourPropertyValue" },
          // bigPictureURL: Big picture URL as a string
        })
        .then(function (response) {
          console.log("notification sent");
        })
        .catch(function (error) {
          console.log(error.msg);
        });
    };

    function handlePress() {
        notify();
        Alert.alert(
        'Alert Title',
        'Order Successful',
        [
            {
            text: 'OK',
            onPress: () => {
                navigation.navigate('Home');
            },
            },
        ]
        );
  }
  

  return (
    <View style={{flex:1}}>
      {loading?<FlatList 
        data={data}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.productID}
        /> : <Text>Cart is empty</Text>}
      <Text style={{color:'black',fontSize:20}}>Total Cost: {getTotalCost()} PKR</Text>
      <Button title="Proceed Payment" onPress={()=>{handlePress()}}/>
    </View>
  );
}

export default AddToCartPage;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      backgroundColor: 'lightgray',
      marginBottom: 20,
    },
    text: {
      color: 'black',
      fontSize: 16,
      marginLeft: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  });
