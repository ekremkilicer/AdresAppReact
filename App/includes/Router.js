import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Anasayfa from "../Pages/Anasayfa";
import Profil from "../Pages/Profil";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Anasayfa"
          component={Anasayfa}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profil"
          component={Profil}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
