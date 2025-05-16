import { FlatList, Pressable } from "react-native";
import { colorsWithSlug } from "../../assets/colors";
import { createCombinationArray } from "../../utils/helper";
import { Combination } from "../../components/Combination";
import { useNavigation } from "@react-navigation/native";

const combinationArray = createCombinationArray(colorsWithSlug);

export function CombinationsScreen() {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={combinationArray}
      keyExtractor={(c) => c.id.toString()}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => navigate("CombinationDetail", { index: index })}
        >
          <Combination combinationData={item} />
        </Pressable>
      )}
    />
  );
}
