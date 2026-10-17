import { Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};
