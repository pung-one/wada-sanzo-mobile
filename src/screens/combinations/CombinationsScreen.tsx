import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { colorsWithSlug } from "../../assets/colors";
import { createCombinationArray } from "../../utils/helper";
import { Combination } from "../../components/Combination";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { CombinationsFilter } from "../../components/CombinationsFilter";
import { CombinationsList } from "../../components/CombinationsList";

const combinationArrayAll = createCombinationArray(colorsWithSlug);

const combinationsMap = {
  1: combinationArrayAll,
  2: combinationArrayAll.filter(
    (combination) => combination.combination.length === 2
  ),
  3: combinationArrayAll.filter(
    (combination) => combination.combination.length === 3
  ),
  4: combinationArrayAll.filter(
    (combination) => combination.combination.length === 4
  ),
};

export function CombinationsScreen() {
  const [filter, setFilter] = useState<1 | 2 | 3 | 4>(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>A Dictionary of Color Combinations</Text>
      <CombinationsFilter filter={filter} setFilter={setFilter} />

      <CombinationsList type="screen" combinations={combinationsMap[filter]} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    position: "absolute",
    zIndex: 1,
    top: 70,
    left: 20,
  },
});
