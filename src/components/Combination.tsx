import { StyleSheet, View } from "react-native";
import { CombinationObject } from "../lib/types";

type Props = {
  combinationData: CombinationObject;
};

export function Combination({ combinationData }: Props) {
  return (
    <View style={styles.root}>
      {combinationData.combination.map((color) => (
        <View
          key={color.hex}
          style={[styles.singleColor, { backgroundColor: color.hex }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    height: 200,
    marginBottom: 20,
  },
  singleColor: {
    flex: 1,
  },
});
