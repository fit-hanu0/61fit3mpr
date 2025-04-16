import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function MyComponent() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <View style={{
            width: '80%', height: '30%',
            justifyContent: 'center', alignItems: 'center'
        }}>
            {todos.map((t, i) => <Text key={i} style={{ fontSize: 30 }}>Todo: {t}</Text>)}
            <Button title="Add Todo" onPress={() => {
                dispatch({ type: 'todos/add', payload: 'Go to Sleep' });
            }} />
        </View>
    );
}