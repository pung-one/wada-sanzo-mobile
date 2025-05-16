import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ColorObject } from "../lib/types";
import Clipboard from "@react-native-clipboard/clipboard";
import { useEffect, useRef, useState } from "react";
import { ToastMessage } from "./ToastMessage";

type Props = {
  colorData: ColorObject;
};

function handlePressedStyle({ pressed }: PressableStateCallbackType) {
  return [
    {
      backgroundColor: pressed
        ? "rgba(255,255,255, 0.3)"
        : "rgba(255,255,255, 0.5)",
    },
    styles.field,
  ];
}

export function CopyFields({ colorData }: Props) {
  const [toastMessage, setToastMessage] = useState<string>();

  const { hex, cmyk, rgb, lab } = colorData;

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  function copyToClipboard(label: string, val: string) {
    Clipboard.setString(val);
    setToastMessage(`Copied ${label}`);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToastMessage(undefined);
      timeoutRef.current = null;
    }, 1000);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <ToastMessage show={!!toastMessage} message={toastMessage || ""} />
      <View style={styles.root}>
        <Pressable
          style={handlePressedStyle}
          onPressIn={() => copyToClipboard("HEX", hex)}
        >
          <Text style={styles.label}>copy HEX</Text>
          <Text style={styles.values}>{hex}</Text>
        </Pressable>

        <Pressable
          style={handlePressedStyle}
          onPressIn={() => copyToClipboard("CMYK", cmyk.join(", "))}
        >
          <Text style={styles.label}>copy CMYK</Text>
          <Text style={styles.values}>
            {`${cmyk[0]}, ${cmyk[1]}, ${cmyk[2]}, ${cmyk[3]}`}
          </Text>
        </Pressable>

        <Pressable
          style={handlePressedStyle}
          onPressIn={() => copyToClipboard("RGB", rgb.join(", "))}
        >
          <Text style={styles.label}>copy RGB</Text>
          <Text style={styles.values}>{`${rgb[0]}, ${rgb[1]}, ${rgb[2]}`}</Text>
        </Pressable>

        <Pressable
          style={handlePressedStyle}
          onPressIn={() => copyToClipboard("LAB", lab.join(", "))}
        >
          <Text style={styles.label}>copy LAB</Text>
          <Text style={styles.values}>
            {`${lab[0].toFixed(2)}, ${lab[1].toFixed(2)}, ${lab[2].toFixed(2)}`}
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    gap: 20,
  },
  field: {
    width: "34%",
    maxHeight: 50,
    minHeight: 40,
    justifyContent: "center",
    borderRadius: 8,
  },
  label: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 5,
  },
  values: {
    fontFamily: "Courier",
    textAlign: "center",
    fontSize: 10,
  },
});
