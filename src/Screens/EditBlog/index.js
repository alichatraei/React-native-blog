import React from "react";
import { Text, View } from "react-native";

const EditBlog = ({ route }) => {
  const {
    params: { id },
  } = route;
  return (
    <View>
      <Text>Edit{id}</Text>
    </View>
  );
};

export default EditBlog;
