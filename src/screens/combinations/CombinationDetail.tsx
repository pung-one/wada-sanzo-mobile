import { StyleSheet, Text, View } from "react-native";
import { colorsWithSlug } from "../../assets/colors";
import { createCombinationArray } from "../../utils/helper";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const combinationArray = createCombinationArray(colorsWithSlug);

type Props = StaticScreenProps<{
  index: number;
}>;

export function CombinationDetail({ route }: Props) {
  const navigation = useNavigation();

  const { combination, id } = combinationArray[route.params.index];

  useEffect(() => {
    navigation.setOptions({ title: `Combination #${id.toString()}` });
  }, [navigation]);

  return (
    <View style={styles.root}>
      {combination.map((color) => (
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
    position: "relative",
    flex: 1,
  },
  singleColor: {
    flex: 1,
  },
});
