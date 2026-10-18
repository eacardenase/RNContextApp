import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CounterScreen, HomeScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Counter" component={CounterScreen} />
    </Tab.Navigator>
  );
};
