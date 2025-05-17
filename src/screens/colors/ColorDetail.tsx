import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { colorsWithSlug } from "../../assets/colors";
import { createCombinationArray } from "../../utils/helper";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { CopyFields } from "../../components/CopyFields";
import { CombinationsList } from "../../components/CombinationsList";

const combinationArray = createCombinationArray(colorsWithSlug);

type Props = StaticScreenProps<{
  index: number;
}>;

export function ColorDetail({ route }: Props) {
  const [showCopyFields, setShowCopyFields] = useState<boolean>(true);
  const navigation = useNavigation();

  const colorObject = colorsWithSlug[route.params.index];
  const { name, hex, combinations, isBright } = colorObject;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Pressable
        style={[styles.button, { borderColor: isBright ? "black" : "white" }]}
        onPress={() => setShowCopyFields(!showCopyFields)}
      >
        <Text style={{ color: isBright ? "black" : "white" }}>
          {showCopyFields ? "Hide values" : "Show values"}
        </Text>
      </Pressable>

      <View style={[styles.colorBox, { backgroundColor: hex }]}>
        {showCopyFields && <CopyFields colorData={colorObject} />}
      </View>

      <CombinationsList
        type="colorDetailPage"
        combinations={combinationArray.filter((c) =>
          combinations.includes(c.id)
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  button: {
    zIndex: 1,
    position: "absolute",
    top: 10,
    right: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  colorBox: {
    flex: 0.4,
  },
});
