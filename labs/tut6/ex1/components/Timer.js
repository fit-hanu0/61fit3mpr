import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = ({ title, project, elapsedTime, onStartStop, onDelete, isRunning }) => {
  const [time, setTime] = useState(elapsedTime);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.project}>{project}</Text>
      <Text style={styles.elapsedTime}>{formatTime(time)}</Text>
      <Button title={isRunning ? "Stop" : "Start"} onPress={onStartStop} />
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  project: {
    fontSize: 16,
    color: '#666',
  },
  elapsedTime: {
    fontSize: 24,
    marginVertical: 10,
  },
});

export default Timer;