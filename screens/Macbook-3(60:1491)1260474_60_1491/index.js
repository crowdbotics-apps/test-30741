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
      <View style={styles.View_60_1498}>
        <View style={styles.View_60_1499}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a3/0d85/b65a3191e43ba3c643275318a8e15049"
            }}
            style={styles.ImageBackground_60_1500}
          />
          <View style={styles.View_60_1501}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a3/0d85/b65a3191e43ba3c643275318a8e15049"
              }}
              style={styles.ImageBackground_60_1502}
            />
            <View style={styles.View_60_1503} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/b060/d787740cae7d410ec38ee5a6b174d565"
            }}
            style={styles.ImageBackground_60_1504}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/670f/f2341055292d6dbf3aefd977a045515d"
            }}
            style={styles.ImageBackground_60_1511}
          />
        </View>
        <View style={styles.View_60_1512}>
          <View style={styles.View_60_1513} />
          <View style={styles.View_60_1514} />
        </View>
        <View style={styles.View_60_1515}>
          <View style={styles.View_60_1516} />
          <View style={styles.View_60_1517} />
        </View>
      </View>
      <View style={styles.View_60_1518}>
        <Text style={styles.Text_60_1518}>+</Text>
      </View>
      <View style={styles.View_60_1519}>
        <Text style={styles.Text_60_1519}>-</Text>
      </View>
      <View style={styles.View_60_1493}>
        <View style={styles.View_60_1494}>
          <View style={styles.View_60_1495} />
          <View style={styles.View_60_1496} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/7459/5a1a9b684a2c93db3c759368428d55d1"
          }}
          style={styles.ImageBackground_60_1497}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1498: {
    width: wp("24.739583333333336%"),
    minWidth: wp("24.739583333333336%"),
    height: hp("64.57142857142857%"),
    minHeight: hp("64.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.67361111111111%"),
    top: hp("17.71428571428571%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1499: {
    width: wp("21.006944444444446%"),
    minWidth: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    minHeight: hp("34.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86631944444445%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1500: {
    width: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1501: {
    width: wp("10.416666666666668%"),
    height: hp("34.530709402901785%"),
    top: hp("0.020359584263395902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_1502: {
    width: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    top: hp("-0.020359584263395902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1503: {
    width: wp("14.756944444444445%"),
    height: hp("46.42857142857143%"),
    top: hp("-11.448931012834821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.340277777777779%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_60_1504: {
    width: wp("9.288194444444445%"),
    height: hp("2.857142857142857%"),
    top: hp("15.857142857142858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.9027777777777715%")
  },
  ImageBackground_60_1511: {
    width: wp("2.276634781929311e-7%"),
    minWidth: wp("2.276634781929311e-7%"),
    height: hp("8.571428571428571%"),
    minHeight: hp("8.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.633680555555557%"),
    top: hp("19.28571428571429%")
  },
  View_60_1512: {
    width: wp("24.739583333333336%"),
    minWidth: wp("24.739583333333336%"),
    height: hp("7.142857142857142%"),
    minHeight: hp("7.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.71428571428572%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_60_1513: {
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
  View_60_1514: {
    width: wp("14.322916666666666%"),
    height: hp("0.4285714285714286%"),
    top: hp("3.4285714285714235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1515: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: hp("8.571428571428571%"),
    minHeight: hp("8.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21701388888889284%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_60_1516: {
    width: wp("11.284722222222223%"),
    height: hp("8.571428571428571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_60_1517: {
    width: wp("11.284722222222223%"),
    height: hp("8.571428571428571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.020833333333336%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_60_1518: {
    width: wp("2.170138888888889%"),
    minWidth: wp("2.170138888888889%"),
    minHeight: hp("7.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.38194444444444%"),
    top: hp("74.14285714285714%"),
    justifyContent: "center"
  },
  Text_60_1518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_60_1519: {
    width: wp("0.8680555555555556%"),
    minWidth: wp("0.8680555555555556%"),
    minHeight: hp("7.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96875%"),
    top: hp("73.57142857142858%"),
    justifyContent: "center"
  },
  Text_60_1519: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_60_1493: {
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
  View_60_1494: {
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
  View_60_1495: {
    width: wp("16.927083333333336%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1496: {
    width: wp("13.194444444444445%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.1428571428571432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1497: {
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
