import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store';

export const CounterScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>;
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text>+1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
