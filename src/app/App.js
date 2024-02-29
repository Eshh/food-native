import { SafeAreaView, Text, View, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import GlobalStyles from "./styles/global.styles";
import mainStyles from "./styles/main.styles";

import Constants from "./constants/app-constants";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          ...GlobalStyles.rootLayout,
          marginTop:
            Constants.PLATFORM === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View style={[GlobalStyles.searchContainer, mainStyles.pa16]}>
          <Text>Search</Text>
        </View>
        <View style={{ ...GlobalStyles.listContainer, ...mainStyles.pa16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
