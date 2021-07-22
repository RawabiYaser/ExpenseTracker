import { StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

//For HomePage
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  Logo: {
        width: 105,
        height: 90,
        position: 'absolute',
        top: 85,
        left:160,
  },
  Input:{
    flexDirection: 'row',
    marginTop: 240,
    alignSelf: 'center',
  },
  inputNum: {
    backgroundColor: "lavender",
    height: 50,
    width: 160,
    borderRadius:5,
    borderBottomWidth: 2.5,
    borderColor: "mediumvioletred",
  },
  inputName: {
    backgroundColor: "lavender",
    height: 48,
    width: 170,
    marginRight:30,
    fontSize:13,
    borderRadius:5,
    borderBottomWidth: 1.75,
    borderColor: "mediumvioletred",
  },
  addButton: {
    width: 120,
    height: 36,
    backgroundColor:"lavender",
    flexDirection: 'row',
    justifyContent:'center',
    alignContent:'space-between',
    marginTop:50,
    alignSelf: 'center',
    borderRadius:12,
  },
  icon:{
    paddingTop: 4,
    fontSize: 23,
    color: "mediumvioletred"
  },
  clearButton: {
    marginTop:8,
    flexDirection: 'row',
    justifyContent:'center',
  },
  button:{
      fontSize:18,
      margin:4,
      color:'mediumslateblue'
  },

//For ListPage
  container: {
      marginBottom: 240,
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  List: {
    marginTop: 156,
    marginBottom: 316,
  },
  headerText: {
    textAlign: "center",
    marginTop: 222,
    fontSize: 40,
    fontWeight: "bold",
    color: "#663399",
  },
  item_style: {
    backgroundColor: '#DAE3F3',
    justifyContent:'space-between',
    flexDirection:'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:5,
    borderBottomWidth: 1.5,
    borderColor: "mediumvioletred",
  },
  items:{
    color: '#663399',
    fontSize: 18,
  }
  });