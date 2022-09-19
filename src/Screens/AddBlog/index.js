import React from "react";
import { TextInput, View } from "react-native";

const AddBlog = ({navigation}) => {
  return (
    <View>
      <Text>Title</Text>
      <TextInput />
      <Text>Content</Text>
      <TextInput />
    </View>
  );
};

export default AddBlog;
