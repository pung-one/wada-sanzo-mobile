import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { colorsWithSlug } from "../../assets/colors";
import { createCombinationArray } from "../../utils/helper";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { CopyFields } from "../../components/CopyFields";

const combinationArray = createCombinationArray(colorsWithSlug);

type Props = StaticScreenProps<{
  index: number;
}>;

export function CombinationDetail({ route }: Props) {
  const [showCopyFields, setShowCopyFields] = useState<boolean>(true);
  const navigation = useNavigation();

  const { combination, id } = combinationArray[route.params.index];

  useEffect(() => {
    navigation.setOptions({ title: `Combination #${id.toString()}` });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Pressable
        style={styles.button}
        onPress={() => setShowCopyFields(!showCopyFields)}
      >
        <Text>{showCopyFields ? "Hide values" : "Show values"}</Text>
      </Pressable>

      {combination.map((color) => (
        <View
          key={color.hex}
          style={[styles.singleColor, { backgroundColor: color.hex }]}
        >
          {showCopyFields && <CopyFields colorData={color} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    flex: 1,
  },
  button: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  singleColor: {
    flex: 1,
  },
});
