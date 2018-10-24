import React, { Component } from 'react';
import { ScrollView, Image,FlatList, Text, Button, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { fetchProducts } from "../src/actions/index";
import { List, ListItem, Tile, Avatar} from "react-native-elements";

 class ProductsScreen extends React.Component {


   componentDidMount() {
   this.props.dispatch(fetchProducts())
 }

 static navigationOptions = {
 headerStyle: {
   backgroundColor: '#d46363',
   borderBottomWidth: 0,
 },
  headerTintColor: 'white',
};


   state = {
     selectedProduct: []
   }


  render() {
    if (this.props.loading) {
      return <View>   <Text style={styles.loader}>Prepping... Juicing... Pouring...</Text> </View>
    }
    return (
      <ScrollView style={styles.main}>
        <View  style={styles.container}>
          <Text style={styles.header}>Products</Text>
        </View>
        {
          this.props.products.map((image, i) => (
            <View   key={i}>
              key={i}
            <Tile
              key={i}
              imageSrc={{uri:image.image_url}}
              title={image.name}
              contentContainerStyle={{ height: 80,  alignSelf:'center' }}
              containerStyle={{height:350, width:340, alignSelf: 'center'}}
              >
              <View
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
              >
              <Text>{image.kind}</Text>

              </View>
              </Tile>
            </View>
          ))
        }
      </ScrollView>

    );
  }
}

const mapStateToProps = state => ({
    products: state.items,
    loading: state.loading
  });



const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white'
  },
  container: {
    backgroundColor: '#d46363',
    alignItems: 'center',
    height: 45,
    marginBottom: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: "600",
    color: '#FFF',
  },
  loader: {
      color: '#d46363',
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 22
  }
});


export default connect(mapStateToProps)(ProductsScreen);
