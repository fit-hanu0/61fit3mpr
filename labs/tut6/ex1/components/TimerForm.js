import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TimerForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues ? initialValues.title : '');
  const [project, setProject] = useState(initialValues ? initialValues.project : '');

  const handleSubmit = () => {
    onSubmit({ title, project });
    setTitle('');
    setProject('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Timer Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Project Name"
        value={project}
        onChangeText={setProject}
      />
      <Button title="Save Timer" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default TimerForm;