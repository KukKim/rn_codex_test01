import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, selectTodos } from "@/src/store/todoSlice";
import type { AppDispatch, RootState } from "@/src/store";

export default function TodoListScreen() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => selectTodos(state));
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    const trimmedText = todoText.trim();

    if (!trimmedText) {
      return;
    }

    dispatch(addTodo(trimmedText));
    setTodoText("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#0f172a" />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Todo List</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.inputRow}>
          <TextInput
            value={todoText}
            onChangeText={setTodoText}
            placeholder="Add a todo"
            placeholderTextColor="#94a3b8"
            style={styles.input}
            returnKeyType="done"
            onSubmitEditing={handleAddTodo}
          />
          <Pressable style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        </View>

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No todos yet. Add your first one.</Text>
          }
          renderItem={({ item, index }) => (
            <View style={styles.todoCard}>
              <Text style={styles.todoIndex}>{index + 1}.</Text>
              <Text style={styles.todoText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  backButton: {
    minWidth: 72,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  headerSpacer: {
    width: 72,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#0f172a",
  },
  addButton: {
    height: 48,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ffffff",
  },
  listContent: {
    gap: 12,
    paddingBottom: 24,
  },
  emptyText: {
    marginTop: 24,
    textAlign: "center",
    fontSize: 16,
    color: "#64748b",
  },
  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  todoIndex: {
    width: 28,
    fontSize: 16,
    fontWeight: "700",
    color: "#334155",
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: "#0f172a",
  },
});
