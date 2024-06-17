import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




import TabBarIcon from "../components/TabBarIcon";

import HomeStack from "./HomeStack";

import TabAboutScreen from "../pages/TabAboutScreen";
import TabConfigScreen from "../pages/TabConfigScreen";


const Tab = createBottomTabNavigator();

export default () => {
    return (
       <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: () => <TabBarIcon name={route.name} />
       })}>
          <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{ tabBarLabel: "Sobre" }} /> 
          <Tab.Screen name="TabHome" component={HomeStack} options={{ tabBarLabel: "Home"}} />
          <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{ tabBarLabel: "Config", tabBarVisible: false }}/>
       </Tab.Navigator> 
    );
}