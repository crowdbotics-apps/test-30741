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
      <View style={styles.View_60_1488}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b0/bb26/1690924265c920be2365e352e7aeaedd"
          }}
          style={styles.ImageBackground_60_1489}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fa/2bf4/dfa93d7fbe690cfda80bf520787c1cc2"
          }}
          style={styles.ImageBackground_60_1490}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(236, 240, 243, 1)" },
  View_2: { height: hp("100%") },
  View_60_1488: {
    width: wp("21.006944444444446%"),
    minWidth: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    minHeight: hp("34.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.49652777777778%"),
    top: hp("32.714285714285715%")
  },
  ImageBackground_60_1489: {
    width: wp("21.006944444444446%"),
    height: hp("34.57142857142857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_1490: {
    width: wp("1.5177565870772014e-7%"),
    minWidth: wp("1.5177565870772014e-7%"),
    height: hp("5.714285714285714%"),
    minHeight: hp("5.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.503472222222221%"),
    top: hp("14.428571428571423%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
