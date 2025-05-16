import { Modal, StyleSheet, Text, View } from "react-native";

type Props = {
  show: boolean;
  message: string;
};

export function ToastMessage({ show, message }: Props) {
  return (
    <View style={[{ display: show ? "flex" : "none" }, styles.modal]}>
      <Text style={styles.modalText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    marginTop: -15,
    alignSelf: "center",
    padding: 5,
    borderRadius: 8,
  },
  modalText: {
    lineHeight: 20,
  },
});
