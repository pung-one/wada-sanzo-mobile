import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
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

export function ColorScreen() {
  const [filter, setFilter] = useState<1 | 2 | 3 | 4>(1);
  const { navigate } = useNavigation();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>A Dictionary of Color Combinations</Text>

      <FlatList
        style={{ paddingTop: 110 }}
        data={colorsWithSlug}
        keyExtractor={(c) => c.slug}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigate("ColorDetail", { index: index })}>
            <View style={[styles.colorElement, { backgroundColor: item.hex }]}>
              <Text
                style={[
                  styles.colorName,
                  { color: item.isBright ? "black" : "white" },
                ]}
              >
                {item.name}
              </Text>
            </View>
          </Pressable>
        )}
      />
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
  colorElement: {
    flex: 1,
    height: 200,
    marginBottom: 20,
  },
  colorName: {
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 16,
  },
});
