import { Pressable, StyleSheet, Text, View } from "react-native";
import { ColorObject } from "../lib/types";

type Props = {
  colorData: ColorObject;
};

export function CopyFields({ colorData }: Props) {
  const { hex, cmyk, rgb, lab } = colorData;
  return (
    <View style={styles.root}>
      <Pressable style={styles.field}>
        <Text style={styles.text}>
          copy HEX {"\n"}
          {hex}
        </Text>
      </Pressable>

      <Pressable style={styles.field}>
        <Text style={styles.text}>
          copy CMYK
          {"\n"}
          {`${cmyk[0]}, ${cmyk[1]}, ${cmyk[2]}, ${cmyk[3]}`}
        </Text>
      </Pressable>

      <Pressable style={styles.field}>
        <Text style={styles.text}>
          copy RGB
          {"\n"} {`${rgb[0]}, ${rgb[1]}, ${rgb[2]}`}
        </Text>
      </Pressable>

      <Pressable style={styles.field}>
        <Text style={styles.text}>
          copy LAB
          {"\n"}
          {`${lab[0].toFixed(2)}.., ${lab[1].toFixed(2)}.., ${lab[2].toFixed(
            2
          )}..`}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
  },
  field: {
    minWidth: "34%",
    height: 60,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: 12,
  },
});
