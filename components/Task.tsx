import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Task({
  taskTitle,
  handleDelete,
}: {
  taskTitle: string;
  handleDelete: any;
}) {
  return (
    <View style={styles.card}>
      {/** square and text */}
      <View style={styles.squareWithText}>
        <View style={styles.square} />
        <Text>{taskTitle}</Text>
      </View>

      {/** Handle delete */}
      <TouchableOpacity style={styles.deleteIcon} onPress={handleDelete}>
        <Ionicons
          size={30}
          color={"red"}
          name="remove-circle"
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    borderColor: "red",
    maxHeight: 30,
    marginBottom: 30,
  },
  card: {
    // maxHeight: 30,
    marginBottom: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
  },
  squareWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.blue,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteIcon: {},
});
