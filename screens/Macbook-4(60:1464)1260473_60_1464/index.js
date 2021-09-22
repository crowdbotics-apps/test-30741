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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/631d/c1c6/48cc46483938267d5eecc28ec4fcac56"
        }}
        style={styles.ImageBackground_60_1482}
      />
      <View style={styles.View_60_1483}>
        <View style={styles.View_60_1484} />
        <View style={styles.View_60_1485} />
      </View>
      <View style={styles.View_60_1471}>
        <View style={styles.View_60_1472}>
          <View style={styles.View_60_1473} />
          <View style={styles.View_60_1474} />
          <View style={styles.View_60_1475} />
          <View style={styles.View_60_1476}>
            <View style={styles.View_60_1477} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67e1/389a/9a2b8489d83bf5df15bef4e761a16161"
              }}
              style={styles.ImageBackground_60_1478}
            />
          </View>
          <View style={styles.View_60_1481} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fa/2bf4/dfa93d7fbe690cfda80bf520787c1cc2"
        }}
        style={styles.ImageBackground_60_1486}
      />
      <View style={styles.View_60_1466}>
        <View style={styles.View_60_1467}>
          <View style={styles.View_60_1468} />
          <View style={styles.View_60_1469} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/7459/5a1a9b684a2c93db3c759368428d55d1"
          }}
          style={styles.ImageBackground_60_1470}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_60_1482: {
    width: wp("7.8125%"),
    height: hp("12.857142857142856%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.17708333333333%")
  },
  View_60_1483: {
    width: wp("25.60763888888889%"),
    minWidth: wp("25.60763888888889%"),
    height: hp("2.571428571428571%"),
    minHeight: hp("2.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.54166666666667%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1484: {
    width: wp("25.60763888888889%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1485: {
    width: wp("19.87847222222222%"),
    height: hp("0.4285714285714286%"),
    top: hp("2.142857142857146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8645833333333286%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1471: {
    width: wp("50.607638888888886%"),
    minWidth: wp("50.607638888888886%"),
    height: hp("15.285714285714286%"),
    minHeight: hp("15.285714285714286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.041666666666668%"),
    top: hp("29.85714285714286%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1472: {
    width: wp("50.607638888888886%"),
    minWidth: wp("50.607638888888886%"),
    height: hp("15.285714285714286%"),
    minHeight: hp("15.285714285714286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1473: {
    width: wp("9.288194444444445%"),
    height: hp("15.285714285714286%"),
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
  View_60_1474: {
    width: wp("9.288194444444445%"),
    height: hp("15.285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.32986111111111%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(156, 171, 194, 1)",
    borderWidth: 2
  },
  View_60_1475: {
    width: wp("9.288194444444445%"),
    height: hp("15.285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.659722222222225%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(156, 171, 194, 1)",
    borderWidth: 2
  },
  View_60_1476: {
    width: wp("9.288194444444445%"),
    minWidth: wp("9.288194444444445%"),
    height: hp("15.285714285714286%"),
    minHeight: hp("15.285714285714286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.989583333333332%"),
    top: hp("0%")
  },
  View_60_1477: {
    width: wp("9.288194444444445%"),
    height: hp("15.285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.15000000596046448,
    borderColor: "rgba(156, 171, 194, 1)",
    borderWidth: 2
  },
  ImageBackground_60_1478: {
    width: wp("1.2917034327983856%"),
    minWidth: wp("1.2917034327983856%"),
    height: hp("1.5867110661097934%"),
    minHeight: hp("1.5867110661097934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9587550693088076%"),
    top: hp("6.728644234793521%")
  },
  View_60_1481: {
    width: wp("9.288194444444445%"),
    height: hp("15.285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(156, 171, 194, 1)",
    borderWidth: 2
  },
  ImageBackground_60_1486: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.213541666666664%"),
    top: hp("69%")
  },
  View_60_1466: {
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
  View_60_1467: {
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
  View_60_1468: {
    width: wp("16.927083333333336%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1469: {
    width: wp("13.194444444444445%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.1428571428571432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1470: {
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
