import React from 'react';
import { View, Button } from 'react-native';
import TimerList from '../components/TimerList';
import useTimers from '../hooks/useTimer';

export default function MainScreen() {
  const { timers, addTimer } = useTimers();

  return (
    <View style={{ flex: 1 }}>
      <TimerList timers={timers} />
      <Button title="+" onPress={addTimer} />
    </View>
  );
}