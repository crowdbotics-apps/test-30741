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
      <View style={styles.View_60_1541}>
        <View style={styles.View_60_1542}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/631d/c1c6/48cc46483938267d5eecc28ec4fcac56"
            }}
            style={styles.ImageBackground_60_1543}
          />
          <View style={styles.View_60_1544}>
            <View style={styles.View_60_1545} />
            <View style={styles.View_60_1546} />
          </View>
        </View>
        <View style={styles.View_60_1547}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/5abf/63cfa6c557d6551787b2a1077b508ee8"
            }}
            style={styles.ImageBackground_60_1548}
          />
          <View style={styles.View_60_1549}>
            <View style={styles.View_60_1550} />
            <View style={styles.View_60_1551} />
          </View>
        </View>
        <View style={styles.View_60_1552}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/5abf/63cfa6c557d6551787b2a1077b508ee8"
            }}
            style={styles.ImageBackground_60_1553}
          />
          <View style={styles.View_60_1554}>
            <View style={styles.View_60_1555} />
            <View style={styles.View_60_1556} />
          </View>
        </View>
        <View style={styles.View_60_1557}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/5abf/63cfa6c557d6551787b2a1077b508ee8"
            }}
            style={styles.ImageBackground_60_1558}
          />
          <View style={styles.View_60_1559}>
            <View style={styles.View_60_1560} />
            <View style={styles.View_60_1561} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6589/3daa/f76e33988ea9499ab7263e9253a03ab9"
        }}
        style={styles.ImageBackground_60_1562}
      />
      <View style={styles.View_60_1536}>
        <View style={styles.View_60_1537}>
          <View style={styles.View_60_1538} />
          <View style={styles.View_60_1539} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/7459/5a1a9b684a2c93db3c759368428d55d1"
          }}
          style={styles.ImageBackground_60_1540}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1541: {
    width: wp("53.385416666666664%"),
    minWidth: wp("53.385416666666664%"),
    height: hp("18.571428571428573%"),
    minHeight: hp("18.571428571428573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.350694444444446%"),
    top: hp("40.714285714285715%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1542: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    height: hp("18.571428571428573%"),
    minHeight: hp("18.571428571428573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1543: {
    width: wp("7.8125%"),
    height: hp("12.857142857142856%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1544: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("2.857142857142857%"),
    minHeight: hp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6510416666666643%"),
    top: hp("15.714285714285715%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1545: {
    width: wp("6.510416666666667%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1546: {
    width: wp("5.121527777777778%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.142857142857146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1547: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("12.857142857142856%"),
    minHeight: hp("12.857142857142856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.493055555555554%"),
    top: hp("2.857142857142854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1548: {
    width: wp("4.340277777777778%"),
    height: hp("7.142857142857142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0850694444444429%")
  },
  View_60_1549: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("2.857142857142857%"),
    minHeight: hp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1550: {
    width: wp("6.510416666666667%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1551: {
    width: wp("5.121527777777778%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.142857142857146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1552: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("12.857142857142856%"),
    minHeight: hp("12.857142857142856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.684027777777775%"),
    top: hp("2.857142857142854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1553: {
    width: wp("4.340277777777778%"),
    height: hp("7.142857142857142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0850694444444429%")
  },
  View_60_1554: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("2.857142857142857%"),
    minHeight: hp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1555: {
    width: wp("6.510416666666667%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1556: {
    width: wp("5.121527777777778%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.142857142857146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1557: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("12.857142857142856%"),
    minHeight: hp("12.857142857142856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("2.857142857142854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1558: {
    width: wp("4.340277777777778%"),
    height: hp("7.142857142857142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0850694444444429%")
  },
  View_60_1559: {
    width: wp("6.510416666666667%"),
    minWidth: wp("6.510416666666667%"),
    height: hp("2.857142857142857%"),
    minHeight: hp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1560: {
    width: wp("6.510416666666667%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1561: {
    width: wp("5.121527777777778%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.142857142857146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1562: {
    width: wp("46.46267361111111%"),
    minWidth: wp("46.46267361111111%"),
    height: hp("7.142857142857142%"),
    minHeight: hp("7.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.083333333333332%"),
    top: hp("56.62343052455358%")
  },
  View_60_1536: {
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
  View_60_1537: {
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
  View_60_1538: {
    width: wp("16.927083333333336%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1539: {
    width: wp("13.194444444444445%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.1428571428571432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1540: {
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
