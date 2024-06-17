import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabHomeScreen from "../pages/TabHomeScreen";
import TabHome2Screen from "../pages/TabHome2Screen";

const HomeStack = createStackNavigator();

export default () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="TabHomeScreen"  component={TabHomeScreen} />
            <HomeStack.Screen name="TabHome2Screen"  component={TabHome2Screen} />
        </HomeStack.Navigator>
    );
}