import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { colorsWithSlug } from "../../assets/colors";
import { createCombinationArray } from "../../utils/helper";
import { Combination } from "../../components/Combination";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { CombinationsFilter } from "../../components/CombinationsFilter";

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
  const { navigate } = useNavigation();

  return (
    <View style={styles.root}>
      <CombinationsFilter filter={filter} setFilter={setFilter} />

      <FlatList
        data={combinationsMap[filter]}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigate("CombinationDetail", { index: index })}
          >
            <Combination combinationData={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
  },
});
