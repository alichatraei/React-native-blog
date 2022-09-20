import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Context } from "../../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const AddBlog = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addToBlogPost } = useContext(Context);

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>Title</Text>
      <TextInput
        autoFocus
        style={styles.inputStyles}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Enter your title"
      />
      <Text style={styles.textStyles}>Content</Text>
      <TextInput
        style={styles.inputStyles}
        onChangeText={(text) => setContent(text)}
        value={content}
        placeholder="Enter your content"
      />
      <Button
        title="Submit"
        onPress={() =>
          addToBlogPost(title, content, () => {
            // Going to first screen on stack
            navigation.popToTop();
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyles: {
    margin: 10,
  },
  textStyles: {
    fontSize: 18,
  },
  inputStyles: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  rightHeaderStyles: {
    marginHorizontal: 10,
  },
});
export default AddBlog;
