import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Stack } from "expo-router";
import { useState } from "react";
import Task from "../components/Task";

export default function App() {
  const [currentTask, setcurrentTask] = useState<string>();
  const [allTasks, setallTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!currentTask) {
      return;
    }
    Keyboard.dismiss();

    setallTasks([...allTasks, currentTask]);
    setcurrentTask("");
  };
  const handleCurrentTaskChange = (text: string) => {
    setcurrentTask(text);
  };

  const handleTaskDelete = (index: number) => {
    let tasksCopy = [...allTasks];
    tasksCopy.splice(index, 1); // remove task at that index
    setallTasks(tasksCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
      />
      <Text style={styles.headerTitle}>Today's Tasks</Text>

      {/** All Tasks */}
      <FlatList
        style={{
          marginBottom: 60,
        }}
        data={allTasks}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            taskTitle={item}
            handleDelete={() => handleTaskDelete(index)}
            // keyExtractor={item => item}
          />
        )}
      >
        {/* {allTasks.map((task, index) => (
        <Task
          key={index}
          taskTitle={task}
          handleDelete={() => handleTaskDelete(index)}
        />
      ))} */}
      </FlatList>

      {/** Write task */}
      <KeyboardAvoidingView style={styles.writeTask}>
        <TextInput
          style={styles.textInput}
          placeholder="Write a Task"
          value={currentTask}
          onChangeText={handleCurrentTaskChange}
        />
        <TouchableOpacity onPress={addTask}>
          <View style={styles.addBtn}>
            <Text style={styles.addBtnText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: 24,
    fontFamily: Fonts.bold,
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  writeTask: {
    position: "absolute",
    bottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: colors.gray,
    // paddingBottom: 20,
  },
  addBtn: {
    borderRadius: 600,
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addBtnText: {
    color: "#C0C0C0",
    fontSize: 39,
    fontWeight: "600",
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 60,
    backgroundColor: "#fff",
    padding: 15,
    width: 250,
    // ...Platform.select({
    //   ios: {
    //     shadowOffset: {
    //       width: 0,
    //       height: 4,
    //     },
    //     shadowOpacity: 0.3,
    //     shadowColor: "#000000",
    //     shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 8,
    //   },
    // }),
  },
});
