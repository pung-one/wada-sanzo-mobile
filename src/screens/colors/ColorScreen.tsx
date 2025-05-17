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
      <FlatList
        data={colorsWithSlug}
        keyExtractor={(c) => c.slug}
        renderItem={({ item }) => (
          <Pressable onPress={() => console.log(item.cmyk)}>
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
    backgroundColor: "white",
  },
  colorElement: {
    flex: 1,
    height: 200,
    marginBottom: 20,
  },
  colorName: {
    paddingTop: 20,
    paddingLeft: 20,
  },
});
