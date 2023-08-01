import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, FlatList, Alert } from "react-native";
import axios from 'axios';
// import { Directions } from "react-native-gesture-handler";


const Order = ({ navigation }: any) => {


    // type Product = {
    //     productName: string;
    //     productPrice: number;
    //     productID: number;
    //     category: string;
    //     imageUrl: string;
    //   };

    type Product = {
        category: string;
        imageUrl: string;
        productID: number;
        productName: string;
        productPrice: number;
    };
    type Category = {
        id: number;
        name: string;
    };
    const [searchValue, setSearchValue] = useState('');
    
    const [products, setProducts] = useState<Product[]>(generateRandomProducts(100))
    // const [products, setProducts] = useState<Product[]>()
    
    const [cart, setcart] = useState<Product[]>([]);
    
    // const [categories, setCategories] = useState<Category[]>();
    const [categories, setCategories] = useState([
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
        { id: 3, name: 'Shoes' },
        { id: 4, name: 'Books' },
        { id: 5, name: 'Home & Kitchen' },
        // { id: 6, name: 'Beauty & Personal Care' },
        // { id: 7, name: 'Health & Fitness' },
        // { id: 8, name: 'Toys & Games' },
        // { id: 9, name: 'Sports & Outdoors' },
        // { id: 10, name: 'Automotive' },
        // { id: 11, name: 'Jewelry' },
        // { id: 12, name: 'Grocery' },
        // { id: 13, name: 'Baby' },
        // { id: 14, name: 'Pet Supplies' },
        // { id: 15, name: 'Office Supplies' },
        // { id: 16, name: 'Furniture' },
    ])

    // useEffect(() => {
    //     axios.get('http://10.11.61.191:3080/products/productCategory')
    //         .then((response) => {
    //             const data2 = response.data.map((product: any) => ({
    //                 productName: product.name,
    //                 productPrice: product.price,
    //                 productID: product.id,
    //                 category: product.category_name,
    //                 imageUrl: product.image,

    //             }));
    //             // console.log("hello", data2)
    //             // Do something with the mapped products array
    //             const uniqueCategories: string[] = Array.from(new Set(data2.map((item: any) => item.category)));
    //             for (let i = 0; i < uniqueCategories.length; i++) {
    //                 const newCategory: Category = {
    //                     id: i + 1,
    //                     name: uniqueCategories[i]
    //                 };
    //                 addCategory(newCategory);
    //             }

    //             setProducts(data2);
    //         })
    //         .catch((error) => {
    //             console.error('Error retrieving products:', error);
    //         });
    // }, [])

    const addCategory = (newCategory: Category) => {
        // console.log(newCategory)
        setCategories(prevCategories => [...(prevCategories ?? []), newCategory]);

    };

    function generateRandomProducts(count: number) {
        const categories1 = ['Electronics', 'Clothing', 'Shoes', 'Books', 'Home & Kitchen',];
        const generatedProducts = [];

        for (let i = 0; i < count; i++) {
            const randomID = Math.floor(Math.random() * 1000);
            const randomPrice = parseFloat((Math.random() * 100).toFixed(2));
            const randomCategory = categories1[Math.floor(Math.random() * categories1.length)];
            const randomImageUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`;


            const product = {
                category: randomCategory,
                imageUrl: randomImageUrl,
                productID: randomID,
                productName: `Product ${randomID}`,
                productPrice: randomPrice,
            };
            generatedProducts.push(product);
        }

        return generatedProducts;
    }

    const goToDetails = () => {
        if (cart) {
            navigation.navigate('AddToCartPage', { cart });
            // console.log(cart)
        }
        else {
            Alert.alert(
                'Alert Title',
                'Your Cart is empty',
                [
                    { text: 'OK' }
                ]
            );
        }
    };

    const storeProduct = (item: any) => {
        console.log(item)
        setcart((prevProducts) => [...prevProducts, item]);
    }
    const handleA = (a: any) => {
        console.log(a)
    }

    const display = ({ item, index }: any) => {
        if (item.productName.includes(searchValue)) {
            return (
                <TouchableOpacity style={styles.productlist}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Product {index + 1}:</Text>
                        <Text style={{ color: 'black' }}>Product Name: {item.productName}</Text>
                        <Text style={{ color: 'black' }}>Price: {item.productPrice}</Text>
                        <Text style={{ color: 'black' }}>ID: {item.productID}</Text>
                        <Text style={{ color: 'black' }}>Category: {item.category}</Text>
                        {/* <Image source={{ uri: 'data:image/jpeg;base64,' + item.imageUrl }} style={styles.image} /> */}
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Button title="Add to Cart" onPress={() => { storeProduct(item) }} />
                    </View>
                </TouchableOpacity>
            );
        }
        else {
            return null;
        }
    }

    let count = 0;
    const displayProducts = (data: any) => {
        return (
            <TouchableOpacity key={data.id} style={{ marginBottom: 30, backgroundColor: 'lightgrey', borderRadius: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black', fontSize: 25 }}>Category: {data.name}</Text>
                    <Text style={{ color: 'black', fontSize: 25 }}>No:{data.id}</Text>
                </View>
                {products ? <FlatList data={products} horizontal={true} renderItem={({ item }) => displayselectedproduct(item, data.name)}
                    keyExtractor={item => item.productID} /> : null}
            </TouchableOpacity>
        )
    }

    const displayselectedproduct = (item: any, name: string) => {
        if (name === item.category) {
            return (
                <TouchableOpacity style={styles.productlist}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Product {count + 1}:</Text>
                        <Text style={{ color: 'black' }}>Product Name: {item.productName}</Text>
                        <Text style={{ color: 'black' }}>Price: {item.productPrice}</Text>
                        <Text style={{ color: 'black' }}>ID: {item.productID}</Text>
                        <Text style={{ color: 'black' }}>Category: {item.category}</Text>
                        {/* <Image source={{ uri: 'data:image/jpeg;base64,' + item.imageUrl }} style={styles.image} /> */}
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Button title="Add to Cart" onPress={() => { storeProduct(item) }} />
                    </View>
                </TouchableOpacity>
                // <View key={Math.random()}>
                //      <Text>ads</Text>
                // </View>
            );
        }
        else { return null; }
    }

    const renderProductItem = ({ item }: { item: Product }) => (
        <View>
            <Text style={{ color: 'black' }}>{item.productName}</Text>
            <Text style={{ color: 'black' }}>{item.productPrice}</Text>
        </View>
    );
        
    return (
        <ScrollView style={{ marginLeft: 10, marginRight: 10, flex: 1, paddingTop: 20 }}>
            <View style={styles.productView}>
                <Text style={styles.text}>All Products </Text>
                <TextInput style={styles.searchBar} value={searchValue} onChangeText={(e) => { setSearchValue(e) }} placeholder="Search Bar: Enter Value to search" placeholderTextColor="black" />
                <View >
                    {products ? <FlatList data={products} horizontal={true} renderItem={display} keyExtractor={item => item.productID} /> : null}
                </View>
            </View>

            <View style={styles.categoryView}>
                <Text style={styles.text}>All Categories</Text>
                <ScrollView>
                    <View style={styles.texttemp}>
                        {categories?.map((data) => {
                            return (
                                displayProducts(data)
                            );
                        })}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Proceed To Payment" onPress={() => { goToDetails(); }} />
            </View>
        </ScrollView>

    );

};

export default Order;

const styles = StyleSheet.create({
    searchBar: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        padding: 0,
        paddingLeft: 10,
        marginLeft: 10,

    },
    buttonContainer: {
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 10,
    },
    textView: {
        marginTop: 20,
        marginBottom: 20,
    },
    textinput: {
        color: 'black',
        borderRadius: 20,
        borderWidth: 1,
        padding: 5,
        paddingLeft: 15,
        // borderColor: 'black',
        backgroundColor: '#FFFFF7',
    },
    text: {
        marginLeft: 15,
        marginBottom: 2,
        color: 'black',
        fontSize: 20,
    },
    subtext: {
        fontSize: 20
    },
    productView: {
        display: "flex",
        flex: 1,
        textAlign: "center",
        marginBottom: 30,
    },
    categoryView: {
        flex: 2,
        textAlign: "center",
        backgroundColor: '#bab5b5',
        borderRadius: 20
    },
    productlist: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    texttemp: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    container: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
    },
    image: {
        width: 212,
        height: 100,
        marginTop: 10,
    },

})





