/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CombinationsScreen } from "./src/screens/combinations/CombinationsScreen";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { CombinationDetail } from "./src/screens/combinations/CombinationDetail";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Combinations",
  screens: {
    Combinations: CombinationsScreen,
    CombinationDetail: {
      screen: CombinationDetail,
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

export default function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = "5%";

  return <Navigation />;
}
