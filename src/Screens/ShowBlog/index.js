import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Context } from "../../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const ShowBlog = ({ route, navigation }) => {
  const {
    params: { id },
  } = route;
  const { state } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // helper function to find object with id
  const findBlog = () => {
    const obj = state.find((item) => item?.id === id);
    setTitle(obj.title);
    setContent(obj.content);
  };
  useEffect(() => {
    findBlog();
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("editBlog", { id })}>
          <AntDesign name="edit" size={24} color="black" />
        </Pressable>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>{`Title : ${title}`}</Text>
      <Text>{`Content: ${content}`}</Text>
    </View>
  );
};

export default ShowBlog;
