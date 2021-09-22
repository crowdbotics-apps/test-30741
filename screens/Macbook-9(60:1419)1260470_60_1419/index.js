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
      <View style={styles.View_60_1426}>
        <View style={styles.View_60_1427}>
          <View style={styles.View_60_1428} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e482/3481/fadeda7e3150017372a528657faa8c75"
            }}
            style={styles.ImageBackground_60_1429}
          />
        </View>
        <View style={styles.View_60_1430}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/841f/6f3d/3baa3732c134b4cbeee74801b13bf6b7"
            }}
            style={styles.ImageBackground_60_1437}
          />
          <View style={styles.View_60_1431} />
          <View style={styles.View_60_1432}>
            <View style={styles.View_60_1433} />
            <View style={styles.View_60_1434} />
          </View>
          <View style={styles.View_60_1435} />
        </View>
        <View style={styles.View_60_1438}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/841f/6f3d/3baa3732c134b4cbeee74801b13bf6b7"
            }}
            style={styles.ImageBackground_60_1445}
          />
          <View style={styles.View_60_1439} />
          <View style={styles.View_60_1440}>
            <View style={styles.View_60_1441} />
            <View style={styles.View_60_1442} />
          </View>
          <View style={styles.View_60_1443} />
        </View>
        <View style={styles.View_60_1446}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/841f/6f3d/3baa3732c134b4cbeee74801b13bf6b7"
            }}
            style={styles.ImageBackground_60_1453}
          />
          <View style={styles.View_60_1447} />
          <View style={styles.View_60_1448}>
            <View style={styles.View_60_1449} />
            <View style={styles.View_60_1450} />
          </View>
          <View style={styles.View_60_1451} />
        </View>
      </View>
      <View style={styles.View_60_1421}>
        <View style={styles.View_60_1422}>
          <View style={styles.View_60_1423} />
          <View style={styles.View_60_1424} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/7459/5a1a9b684a2c93db3c759368428d55d1"
          }}
          style={styles.ImageBackground_60_1425}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1426: {
    width: wp("25.60763888888889%"),
    minWidth: wp("25.60763888888889%"),
    height: hp("52.85714285714286%"),
    minHeight: hp("52.85714285714286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.23958333333333%"),
    top: hp("27.57142857142857%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1427: {
    width: wp("25.17361111111111%"),
    minWidth: wp("25.17361111111111%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21701388888889284%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1428: {
    width: wp("19.96527777777778%"),
    height: hp("5.714285714285714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  ImageBackground_60_1429: {
    width: wp("3.4722222222222223%"),
    height: hp("5.714285714285714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.701388888888893%")
  },
  View_60_1430: {
    width: wp("25.60763888888889%"),
    minWidth: wp("25.60763888888889%"),
    height: hp("13.571428571428571%"),
    minHeight: hp("13.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.857142857142854%")
  },
  ImageBackground_60_1437: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.49009874131945%"),
    top: hp("4.165318080357146%")
  },
  View_60_1431: {
    width: wp("25.60763888888889%"),
    height: hp("13.571428571428571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_60_1432: {
    width: wp("11.71875%"),
    height: hp("2.2857142857142856%"),
    top: hp("2.857142857142861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.246527777777779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_60_1433: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1434: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.857142857142854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1435: {
    width: wp("6.076388888888888%"),
    height: hp("10%"),
    top: hp("1.8571428571428612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1284722222222285%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_60_1438: {
    width: wp("25.60763888888889%"),
    minWidth: wp("25.60763888888889%"),
    height: hp("13.571428571428571%"),
    minHeight: hp("13.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.571428571428577%")
  },
  ImageBackground_60_1445: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.49009874131945%"),
    top: hp("4.165318080357139%")
  },
  View_60_1439: {
    width: wp("25.60763888888889%"),
    height: hp("13.571428571428571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_60_1440: {
    width: wp("11.71875%"),
    height: hp("2.2857142857142856%"),
    top: hp("2.857142857142854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.246527777777779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_60_1441: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1442: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.8571428571428612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1443: {
    width: wp("6.076388888888888%"),
    height: hp("10%"),
    top: hp("1.857142857142854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1284722222222285%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_60_1446: {
    width: wp("25.60763888888889%"),
    minWidth: wp("25.60763888888889%"),
    height: hp("13.571428571428571%"),
    minHeight: hp("13.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.28571428571429%")
  },
  ImageBackground_60_1453: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.49009874131945%"),
    top: hp("4.165318080357139%")
  },
  View_60_1447: {
    width: wp("25.60763888888889%"),
    height: hp("13.571428571428571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_60_1448: {
    width: wp("11.71875%"),
    height: hp("2.2857142857142856%"),
    top: hp("2.857142857142861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.246527777777779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_60_1449: {
    width: wp("11.71875%"),
    height: hp("0.4285714285714286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1450: {
    width: wp("9.114583333333332%"),
    height: hp("0.4285714285714286%"),
    top: hp("1.857142857142847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 160, 169, 1)"
  },
  View_60_1451: {
    width: wp("6.076388888888888%"),
    height: hp("10%"),
    top: hp("1.8571428571428612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1284722222222285%"),
    backgroundColor: "rgba(156, 171, 194, 1)",
    opacity: 0.3499999940395355,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_60_1421: {
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
  View_60_1422: {
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
  View_60_1423: {
    width: wp("16.927083333333336%"),
    height: hp("0.7142857142857143%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_60_1424: {
    width: wp("13.194444444444445%"),
    height: hp("0.7142857142857143%"),
    top: hp("2.1428571428571432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_60_1425: {
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
