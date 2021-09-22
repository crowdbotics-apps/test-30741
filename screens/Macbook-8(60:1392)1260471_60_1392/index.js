import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_60_1399}>
        <View style={styles.View_60_1400}>
          <View style={styles.View_60_1401} />
          <View style={styles.View_60_1402} />
          <View style={styles.View_60_1403} />
          <View style={styles.View_60_1404} />
          <View style={styles.View_60_1405} />
          <View style={styles.View_60_1406} />
          <View style={styles.View_60_1407} />
        </View>
        <View style={styles.View_60_1408}>
          <View style={styles.View_60_1409}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b5f/87bb/36aed0256099c9cc258f97e4d3dd3fa9"
              }}
              style={styles.ImageBackground_60_1410}
            />
            <View style={styles.View_60_1411}>
              <View style={styles.View_60_1412} />
              <View style={styles.View_60_1413} />
            </View>
          </View>
          <View style={styles.View_60_1414}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5035/8f35/9afbd6a76f126c6fc3858ed6b0b4125d"
              }}
              style={styles.ImageBackground_60_1416}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15bb/4651/48fa32641ae15fcce17f1bbcf98953e1"
              }}
              style={styles.ImageBackground_60_1417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ce/bd62/9464d897d668d8f9a99aa9ff119ff774"
              }}
              style={styles.ImageBackground_60_1415}
            />
          </View>
        </View>
        <View style={styles.View_60_1418} />
      </View>
      <View style={styles.View_60_1394}>
        <View style={styles.View_60_1395}>
          <View style={styles.View_60_1396} />
          <View style={styles.View_60_1397} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/7459/5a1a9b684a2c93db3c759368428d55d1"
          }}
          style={styles.ImageBackground_60_1398}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1399: {
    width: wp("24.739583333333336%"),
    minWidth: wp("24.739583333333336%"),
    height: hp("73.42857142857143%"),
    minHeight: hp("73.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.23958333333333%"),
    top: hp("13.285714285714286%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1400: {
    width: wp("24.739583333333336%"),
    minWidth: wp("24.739583333333336%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1401: {
    width: wp("24.739583333333336%"),
    height: hp("7.142857142857142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_60_1402: {
    width: wp("24.739583333333336%"),
    height: hp("7.142857142857142%"),
    top: hp("9.999999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_60_1403: {
    width: wp("24.739583333333336%"),
    height: hp("7.142857142857142%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_60_1404: {
    width: wp("14.322916666666666%"),
    height: hp("0.4285714285714286%"),
    top: hp("30.000000000000007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1405: {
    width: wp("24.739583333333336%"),
    height: hp("7.142857142857142%"),
    top: hp("33.285714285714285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_60_1406: {
    width: wp("14.322916666666666%"),
    height: hp("0.4285714285714286%"),
    top: hp("43.285714285714285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1407: {
    width: wp("14.322916666666666%"),
    height: hp("0.4285714285714286%"),
    top: hp("46.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1408: {
    width: wp("24.739583333333336%"),
    minWidth: wp("24.739583333333336%"),
    height: hp("6.428571428571428%"),
    minHeight: hp("6.428571428571428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.714285714285715%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1409: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("6.428571428571428%"),
    minHeight: hp("6.428571428571428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1410: {
    width: wp("3.90625%"),
    height: hp("6.428571428571428%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1411: {
    width: wp("11.71875%"),
    minWidth: wp("11.71875%"),
    height: hp("2.430803571428571%"),
    minHeight: hp("2.430803571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333343%"),
    top: hp("1.9988839285714306%")
  },
  View_60_1412: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("2.002232142857139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1413: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1414: {
    width: wp("2.604166666666667%"),
    minWidth: wp("2.604166666666667%"),
    height: hp("4.285714285714286%"),
    minHeight: hp("4.285714285714286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.13541666666667%"),
    top: hp("1.0714285714285694%")
  },
  ImageBackground_60_1416: {
    width: wp("0.3759750889407264%"),
    minWidth: wp("0.3759750889407264%"),
    height: hp("0.6187475749424526%"),
    minHeight: hp("0.6187475749424526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7469607724083787%"),
    top: hp("1.9823259626116112%")
  },
  ImageBackground_60_1417: {
    width: wp("0.8593312568134732%"),
    minWidth: wp("0.8593312568134732%"),
    height: hp("1.4142137254987444%"),
    minHeight: hp("1.4142137254987444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1284722222222214%"),
    top: hp("1.3715035574776806%")
  },
  ImageBackground_60_1415: {
    width: wp("2.604166666666667%"),
    height: hp("4.285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1418: {
    width: wp("22.135416666666664%"),
    height: hp("8.571428571428571%"),
    top: hp("64.85714285714286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333428%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1394: {
    width: wp("91.05902777777779%"),
    minWidth: wp("91.05902777777779%"),
    height: hp("6.428571428571428%"),
    minHeight: hp("6.428571428571428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.036458333333334%"),
    top: hp("4.81829833984375%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1395: {
    width: wp("16.927083333333336%"),
    minWidth: wp("16.927083333333336%"),
    height: hp("2.857142857142857%"),
    minHeight: hp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7857142857142856%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_60_1396: {
    width: wp("16.927083333333336%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1397: {
    width: wp("13.194444444444445%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.1428571428571432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1398: {
    width: wp("3.90625%"),
    height: hp("6.428571428571428%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.15277777777779%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
