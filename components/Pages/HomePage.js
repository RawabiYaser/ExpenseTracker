import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Alert,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import styles from './Style.js';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import firebase from '../../config/firebase';
import WavyHeader from '../Theme/Wave1';

export default class HomeP extends Component {

  constructor(props) {
    super(props);
    this.state = {TName: [], TAmount: []};
  };

  Add = (TName, TAmount) =>{

      firebase.database().ref().push({TName, TAmount});
      this.setState({TName:[], TAmount:[]});

      Alert.alert('SUCCESS','Transaction Name: '+this.state.TName+' Transaction Amount: '+this.state.TAmount);
  }


  clearInput = () => {
    if (this.TName) {
      this.TName.setState({ value: [] });
    }
    if (this.TAmount) {
       this.TAmount.clear();
       this.state = {TAmount: []};
    }
  }

  render() {
          let TransactionName = [{
            value: 'Medical',
          }, {
            value: 'Education',
          }, {
            value: 'Entertainment',
          }, {
            value: 'Shopping',
          }, {
            value: 'Transport',
          }, {
            value: 'Food',
          }, {
            value: 'Renting',
          }, {
            value: 'Other...',
          }
          ];

      return (
        <View>
           <WavyHeader customStyles={styles.svgCurve} />
           <View style={styles.headerContainer}>
              <Image
                 style={styles.Logo}
                 source={require('../../assets/Logo.png')}
              />
              <Text style={styles.headerText}>ADD EXPENSE</Text>
           </View>

           <View style={styles.Input}>
                <Dropdown
                    style={styles.inputName}
                    icon='chevron-down'
                    iconColor='mediumvioletred'
                    baseColor='#DAE3F3'
                    label='Transaction Name'
                    data={TransactionName}
                    onChangeText={TName => this.setState({TName})}
                    ref={ref => this.TName = ref}

                />
                <TextInput
                    style={styles.inputNum}
                    placeholder="  Transaction Amount"
                    keyboardType = 'numeric'
                    returnKeyType={ 'done' }
                    onChangeText={TAmount => this.setState({TAmount})}
                    ref={ref => this.TAmount = ref}
                    value={this.state.TAmount}
                />
           </View>

           <View style={styles.addButton}>
                 <MaterialIcons name="add-circle" style= {styles.icon} />
                 <TouchableOpacity
                    onPress={() => this.Add(this.state.TName, this.state.TAmount)}
                 >
                    <Text style= {styles.button}>  ADD  </Text>
                 </TouchableOpacity>
           </View>

           <View style={styles.clearButton}>
                  <MaterialIcons name="cancel" style= {styles.icon} />
                  <TouchableOpacity
                     type="clear"
                     onPress={this.clearInput}
                   >
                     <Text style= {styles.button}>CLEAR</Text>
                   </TouchableOpacity>
           </View>
        </View>
    );
  }
}