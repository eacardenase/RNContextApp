import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './presentation/routes';

function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default App;
