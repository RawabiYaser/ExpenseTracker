import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Alert,
  Button,
  Image,
  Dimensions,
} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

//type Props = {};
//type State = {
//  TName: string,
//  TAmount: double,
//};
//
//export default class App extends Component<Props, State> {
//  constructor(props: Props) {
//    super(props);
//    this.state = {
//      TName: '',
//      TAmount: 0.0,
//    };
//  }
//  nameInput: TextInput;
//  amountInput: TextInput;
//
//  handleTName = (Name: string) => {
//    this.setState({
//      TName: Name,
//    });
//  }
//
//  handleTNum = (Amount: string) => {
//    this.setState({
//      TAmount: Amount,
//    });
//  }
//
//  clear = () => {
//    this.nameInput.clear();
//    this.amountInput.clear();
//  }
//
//  add = () => {
//
//  }
//  }

export default function HomeP() {
  return (
    <View style={styles.container}>
            <View style={styles.Input}>
            <TextInput
                style={styles.inputName}
                placeholder="  Transaction Name"
//              ref={(input) => {this.nameInput = input;}}
            />
            <TextInput
                style={styles.inputNum}
                placeholder="  Transaction Amount"
//              ref={(input) => {this.amountInput = input;}}
            />
            </View>

            <View style={styles.addButton}>
                <Ionicons name="add-outline" size={24}  style= {styles.icon} />
                <Button
                  title="ADD"
                  color= 'mediumvioletred'
//                onPress={() => this.Add(this.state.expense)}
                />
            </View>

            <View style={styles.clearButton}>
                <MaterialIcons name="clear" size={22} color="brown" style= {styles.icon} />
                <Button
                  title="Clear"
                  type="clear"
                  color= 'mediumvioletred'
    //            onPress={this.clear}
                />
            </View>
    </View>
  );
}


const styles = StyleSheet.create({
  Input:{
    flexDirection: 'row',
    marginTop: 150,
    alignSelf: 'center',
  },
  inputNum: {
    backgroundColor: "aliceblue",
    height: 50,
    width: 160,
    borderRadius:5,
    borderBottomWidth: 2.5,
    borderColor: "mediumvioletred",
  },
  inputName: {
    backgroundColor: "aliceblue",
    height: 50,
    width: 160,
    marginRight:30,
    borderRadius:5,
    borderBottomWidth: 2.5,
    borderColor: "mediumvioletred",
  },
  addButton: {
    width: 120,
    height: 36,
    backgroundColor:"aliceblue",
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:50,
    alignSelf: 'center',
    borderRadius:12,
  },
  icon:{
    paddingTop: 6,
    color: "mediumvioletred"
  },
  clearButton: {
    marginTop:8,
    flexDirection: 'row',
    justifyContent:'center',
  },
  });