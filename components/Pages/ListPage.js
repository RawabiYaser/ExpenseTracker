import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Alert,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
} from 'react-native';
import styles from './Style.js';
import WavyHeader from '../Theme/Wave2';
import firebase from '../../config/firebase';

export default class List extends Component{
 constructor(props){
     super(props);
     this.state={
         list:[],
     }
 }
 componentDidMount(){
    firebase.database().ref().on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
       li.push({
        key: child.key,
        TName:child.val().TName,
        TAmount: child.val().TAmount
      })
    })
   this.setState({list:li})
  })
 }

 render(){
  return(
      <View style={styles.container}>
        <WavyHeader customStyles={styles.svgCurve} />
        <Image
            style={styles.Logo}
            source={require('../../assets/Logo.png')}
        />
        <Text style={styles.headerText}>EXPENSE LIST</Text>

        <View>
           <FlatList
                   style={styles.List}
              data={this.state.list}
              keyExtractor={(item)=>item.key}
              renderItem={({item}) =>

                  <View style={styles.item_style}>
                      <Text style={styles.items}> {item.TName} </Text>
                      <Text style={styles.items}> {item.TAmount} SAR</Text>
                  </View>
              }
           />
        </View>
      </View>
  );
 }
}
