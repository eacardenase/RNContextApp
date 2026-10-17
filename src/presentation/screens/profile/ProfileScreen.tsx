import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <Text>{name}</Text>
      <Text>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Edwin Cardenas' })}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          useProfileStore.setState({ email: 'eacardenase@gmail.com' })
        }
      >
        <Text>Cambiar email</Text>
      </Pressable>
    </View>
  );
};
