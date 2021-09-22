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
      <View style={styles.View_60_1373}>
        <View style={styles.View_60_1374}>
          <View style={styles.View_60_1375} />
          <View style={styles.View_60_1376}>
            <View style={styles.View_60_1377} />
            <View style={styles.View_60_1378} />
            <View style={styles.View_60_1379} />
            <View style={styles.View_60_1380} />
          </View>
        </View>
        <View style={styles.View_60_1381}>
          <View style={styles.View_60_1382} />
          <View style={styles.View_60_1383} />
        </View>
        <View style={styles.View_60_1384}>
          <View style={styles.View_60_1385} />
          <View style={styles.View_60_1386}>
            <View style={styles.View_60_1387} />
            <View style={styles.View_60_1388} />
            <View style={styles.View_60_1389} />
            <View style={styles.View_60_1390} />
          </View>
        </View>
      </View>
      <View style={styles.View_60_1368}>
        <View style={styles.View_60_1369}>
          <View style={styles.View_60_1370} />
          <View style={styles.View_60_1371} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/7459/5a1a9b684a2c93db3c759368428d55d1"
          }}
          style={styles.ImageBackground_60_1372}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea55/ad8b/88da1a25f636648f8d47f473ed123954"
        }}
        style={styles.ImageBackground_60_1391}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1373: {
    width: wp("56.33680555555556%"),
    minWidth: wp("56.33680555555556%"),
    height: hp("37.42857142857143%"),
    minHeight: hp("37.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.875%"),
    top: hp("31.285714285714285%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1374: {
    width: wp("19.96527777777778%"),
    minWidth: wp("19.96527777777778%"),
    height: hp("37.42857142857143%"),
    minHeight: hp("37.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1375: {
    width: wp("19.96527777777778%"),
    height: hp("28.57142857142857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(156, 171, 194, 1)",
    borderWidth: 2
  },
  View_60_1376: {
    width: wp("11.71875%"),
    minWidth: wp("11.71875%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.123263888888889%"),
    top: hp("31.428571428571423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1377: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1378: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.8571428571428612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333321%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1379: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("3.7142857142857224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1380: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("5.571428571428569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333321%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1381: {
    width: wp("4.774305555555555%"),
    minWidth: wp("4.774305555555555%"),
    height: hp("2.2857142857142856%"),
    minHeight: hp("2.2857142857142856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.78125%"),
    top: hp("17.57142857142857%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1382: {
    width: wp("4.774305555555555%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1383: {
    width: wp("2.604166666666667%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.857142857142854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0850694444444429%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1384: {
    width: wp("19.96527777777778%"),
    minWidth: wp("19.96527777777778%"),
    height: hp("37.42857142857143%"),
    minHeight: hp("37.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.37152777777778%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1385: {
    width: wp("19.96527777777778%"),
    height: hp("28.57142857142857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(156, 171, 194, 1)",
    borderWidth: 2
  },
  View_60_1386: {
    width: wp("11.71875%"),
    minWidth: wp("11.71875%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.123263888888886%"),
    top: hp("31.428571428571423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1387: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1388: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.8571428571428612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333357%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1389: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("3.7142857142857224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1390: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("5.571428571428569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333357%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1368: {
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
  View_60_1369: {
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
  View_60_1370: {
    width: wp("16.927083333333336%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1371: {
    width: wp("13.194444444444445%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.1428571428571432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1372: {
    width: wp("3.90625%"),
    height: hp("6.428571428571428%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.15277777777779%")
  },
  ImageBackground_60_1391: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.18576388888889%"),
    top: hp("42.714285714285715%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
