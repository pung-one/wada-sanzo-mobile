import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  filter: 1 | 2 | 3 | 4;
  setFilter: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
};

export function CombinationsFilter({ filter, setFilter }: Props) {
  return (
    <View style={styles.root}>
      <Pressable
        onPress={() => setFilter((prev) => (prev === 2 ? 1 : 2))}
        style={[
          styles.filterButton,
          { backgroundColor: filter === 2 ? "white" : "black" },
        ]}
      >
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 2 ? "black" : "white" },
          ]}
        />
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 2 ? "black" : "white" },
          ]}
        />
      </Pressable>

      <Pressable
        onPress={() => setFilter((prev) => (prev === 3 ? 1 : 3))}
        style={[
          styles.filterButton,
          { backgroundColor: filter === 3 ? "white" : "black" },
        ]}
      >
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 3 ? "black" : "white" },
          ]}
        />
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 3 ? "black" : "white" },
          ]}
        />
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 3 ? "black" : "white" },
          ]}
        />
      </Pressable>

      <Pressable
        onPress={() => setFilter((prev) => (prev === 4 ? 1 : 4))}
        style={[
          styles.filterButton,
          { backgroundColor: filter === 4 ? "white" : "black" },
        ]}
      >
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 4 ? "black" : "white" },
          ]}
        />
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 4 ? "black" : "white" },
          ]}
        />
        <View
          style={[
            styles.divider,
            { backgroundColor: filter === 4 ? "black" : "white" },
          ]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    flexDirection: "row",
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
    gap: 10,
  },
  filterButton: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
    gap: 1,
  },
  divider: {
    flex: 1,
    backgroundColor: "white",
    maxWidth: "50%",
  },
});
