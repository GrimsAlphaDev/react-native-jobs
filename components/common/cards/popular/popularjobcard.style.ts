import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const container = (selectedJob: any, item: any) => ({
  width: 250,
  height: 140,
  padding: SIZES.large,
  backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
  borderRadius: SIZES.medium,
  justifyContent: "space-between",
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
})


const jobName = (selectedJob: any, item: any) => ({
  fontSize: SIZES.large,
  fontFamily: FONT.medium,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
})

const publisher = (selectedJob: any, item: any) => ({
  fontSize: SIZES.medium - 2,
  fontFamily: FONT.bold,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
})

const styles = StyleSheet.create({
  container: container as any,
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "75%",
    height: "75%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: jobName as any,
  publisher: publisher as any,
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
