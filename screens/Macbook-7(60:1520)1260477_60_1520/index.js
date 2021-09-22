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
      <View style={styles.View_60_1521}>
        <View style={styles.View_60_1522}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a3/0d85/b65a3191e43ba3c643275318a8e15049"
            }}
            style={styles.ImageBackground_60_1523}
          />
          <View style={styles.View_60_1524}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a3/0d85/b65a3191e43ba3c643275318a8e15049"
              }}
              style={styles.ImageBackground_60_1525}
            />
            <View style={styles.View_60_1526} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/b060/d787740cae7d410ec38ee5a6b174d565"
            }}
            style={styles.ImageBackground_60_1527}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1521: {
    width: wp("21.006944444444446%"),
    minWidth: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    minHeight: hp("34.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.49652777777778%"),
    top: hp("32.714285714285715%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_60_1522: {
    width: wp("21.006944444444446%"),
    minWidth: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    minHeight: hp("34.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_60_1523: {
    width: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1524: {
    width: wp("10.416666666666668%"),
    height: hp("34.530709402901785%"),
    top: hp("0.020359584263395902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_1525: {
    width: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    top: hp("-0.020359584263395902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_60_1526: {
    width: wp("14.756944444444445%"),
    height: hp("46.42857142857143%"),
    top: hp("-11.448931012834827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.340277777777779%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_60_1527: {
    width: wp("9.288194444444445%"),
    height: hp("2.857142857142857%"),
    top: hp("15.857142857142854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.902777777777779%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
