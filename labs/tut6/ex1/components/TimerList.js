import React from 'react';
import { View, FlatList, Button } from 'react-native';
import Timer from './Timer';
import styles from '../styles';

const TimerList = ({ timers, onEdit, onDelete, onAdd }) => {
  return (
    <View style={styles.timerListContainer}>
      <FlatList
        data={timers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Timer
            timer={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
      />
      <Button title="+" onPress={onAdd} />
    </View>
  );
};

export default TimerList;