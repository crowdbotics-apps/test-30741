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
      <View style={styles.View_60_1455}>
        <View style={styles.View_60_1456}>
          <View style={styles.View_60_1457} />
          <View style={styles.View_60_1458}>
            <View style={styles.View_60_1459} />
            <View style={styles.View_60_1460} />
            <View style={styles.View_60_1461} />
            <View style={styles.View_60_1462} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea55/ad8b/88da1a25f636648f8d47f473ed123954"
        }}
        style={styles.ImageBackground_60_1463}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1455: {
    width: wp("19.96527777777778%"),
    minWidth: wp("19.96527777777778%"),
    height: hp("37.42857142857143%"),
    minHeight: hp("37.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.01736111111111%"),
    top: hp("31.285714285714285%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1456: {
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
  View_60_1457: {
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
  View_60_1458: {
    width: wp("11.71875%"),
    minWidth: wp("11.71875%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.123263888888893%"),
    top: hp("31.428571428571423%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1459: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1460: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.8571428571428612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333286%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1461: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("3.7142857142857224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1462: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("5.571428571428569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333286%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  ImageBackground_60_1463: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
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
