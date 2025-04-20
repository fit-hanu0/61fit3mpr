import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks) setTasks(JSON.parse(storedTasks));
        } catch (error) {
            console.error('Error loading tasks', error);
        }
    };

    const saveTasks = async (updatedTasks) => {
        try {
            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTasks),
            });
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.error('Error saving tasks', error);
        }
    };

    const addTask = () => {
        if (!task.trim()) return;
        const newTasks = [...tasks, { id: Date.now().toString(), text: task, completed: false }];
        setTasks(newTasks);
        saveTasks(newTasks);
        setTask('');
    };

    const toggleTask = (id) => {
        const updatedTasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
        saveTasks(filteredTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add Task" onPress={addTask} />

            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.task}>
                        <Text style={[styles.taskText, item.completed && styles.completed]}>
                            {item.text}
                        </Text>
                        <Button title="Delete" color="red" onPress={() => deleteTask(item.id)} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10 },
    task: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
    taskText: { fontSize: 18 },
    completed: { textDecorationLine: 'line-through', color: 'gray' }
});

export default TodoApp;
