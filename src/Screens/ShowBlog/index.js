import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Context } from "../../context/BlogContext";
const ShowBlog = ({ route }) => {
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
  return (
    <View>
      <Text>{`Title : ${title}`}</Text>
      <Text>{`Content: ${content}`}</Text>
    </View>
  );
};

export default ShowBlog;
