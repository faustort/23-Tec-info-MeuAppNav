import { DefaultTheme, MD3DarkTheme as DarkTheme } from "react-native-paper";

// novos temas podem ser gerados em:
// https://callstack.github.io/react-native-paper/theming.html

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: "rgb(192, 1, 0)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 218, 212)",
    onPrimaryContainer: "rgb(65, 0, 0)",
    secondary: "rgb(119, 86, 81)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 218, 212)",
    onSecondaryContainer: "rgb(44, 21, 18)",
    tertiary: "rgb(112, 92, 46)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(251, 223, 166)",
    onTertiaryContainer: "rgb(37, 26, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 25)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(32, 26, 25)",
    surfaceVariant: "rgb(245, 221, 218)",
    onSurfaceVariant: "rgb(83, 67, 65)",
    outline: "rgb(133, 115, 112)",
    outlineVariant: "rgb(216, 194, 190)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(54, 47, 46)",
    inverseOnSurface: "rgb(251, 238, 236)",
    inversePrimary: "rgb(255, 180, 168)",
    elevation: {
      level0: "transparent",
      level1: "rgb(252, 239, 242)",
      level2: "rgb(250, 231, 235)",
      level3: "rgb(248, 224, 227)",
      level4: "rgb(247, 221, 224)",
      level5: "rgb(246, 216, 219)",
    },
    surfaceDisabled: "rgba(32, 26, 25, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 25, 0.38)",
    backdrop: "rgba(59, 45, 43, 0.4)",
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,

    primary: "rgb(255, 180, 168)",
    onPrimary: "rgb(105, 1, 0)",
    primaryContainer: "rgb(147, 1, 0)",
    onPrimaryContainer: "rgb(255, 218, 212)",
    secondary: "rgb(231, 189, 182)",
    onSecondary: "rgb(68, 41, 37)",
    secondaryContainer: "rgb(93, 63, 59)",
    onSecondaryContainer: "rgb(255, 218, 212)",
    tertiary: "rgb(222, 196, 140)",
    onTertiary: "rgb(62, 46, 4)",
    tertiaryContainer: "rgb(86, 68, 25)",
    onTertiaryContainer: "rgb(251, 223, 166)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(32, 26, 25)",
    onBackground: "rgb(237, 224, 221)",
    surface: "rgb(32, 26, 25)",
    onSurface: "rgb(237, 224, 221)",
    surfaceVariant: "rgb(83, 67, 65)",
    onSurfaceVariant: "rgb(216, 194, 190)",
    outline: "rgb(160, 140, 137)",
    outlineVariant: "rgb(83, 67, 65)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(237, 224, 221)",
    inverseOnSurface: "rgb(54, 47, 46)",
    inversePrimary: "rgb(192, 1, 0)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 34, 32)",
      level2: "rgb(50, 38, 36)",
      level3: "rgb(57, 43, 41)",
      level4: "rgb(59, 45, 42)",
      level5: "rgb(63, 48, 45)",
    },
    surfaceDisabled: "rgba(237, 224, 221, 0.12)",
    onSurfaceDisabled: "rgba(237, 224, 221, 0.38)",
    backdrop: "rgba(59, 45, 43, 0.4)",
  },
};

//
// Path: src/navigation/index.jsx
// Compare this snippet from src/screens/HomeScreen.jsx:
// import { Text, View } from "react-native";
//
// export function HomeScreen() {
//   return (
//     <View>
//       <Text>Hi Fking Lorena!</Text>
//     </View>
//   );
// }
//
// Compare this snippet from src/navigation/index.jsx:
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useColorScheme } from "react-native";
// import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
// import { HomeScreen } from "../screens/HomeScreen";
//
// const Stack = createNativeStackNavigator();
// const MaterialBottomTab = createMaterialBottomTabNavigator();
//
// export const RootNavigator = () => {
//   const colorScheme = useColorScheme();
//   const theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;
//   // use dark theme is system is in dark mode
//   return (
//     <NavigationContainer theme={theme}>
//       <StackNavigation />
//     </NavigationContainer>
//   );
// };
//
// const StackNavigation = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={MaterialBottomTabNavigation} />
//       <Stack.Screen name="Details" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// };
//
// const MaterialBottomTabNavigation = () => {
//   const colorScheme = useColorScheme();
//   const theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;
//   return (
//     <MaterialBottomTab.Navigator theme={theme}>
//       <MaterialBottomTab.Screen
//         name="Home"
//         component
