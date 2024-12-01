import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

const {COLORS, SIZES} = require("../../../constants");

const createBtnImg = (dimension: number): ImageStyle => ({
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
});

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: createBtnImg as any,
});

export default styles;