import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { CombinationObject } from "../lib/types";
import { Combination } from "./Combination";
import { useNavigation } from "@react-navigation/native";

type Props = {
  combinations: CombinationObject[];
  type: "screen" | "colorDetailPage";
};

export function CombinationsList({ combinations, type }: Props) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.listWrapper}>
      <FlatList
        style={{ paddingTop: type === "screen" ? 110 : 20 }}
        data={combinations}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigate("CombinationDetail", { id: item.id })}
          >
            <Combination combinationData={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
});
