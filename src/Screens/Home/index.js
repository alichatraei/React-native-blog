import React, { useContext, useReducer } from "react";
import { Text, View, FlatList, Button } from "react-native";
import BlogContext from "../../context/BlogContext";

const Home = () => {
  const { data, addToBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add blog post" onPress={() => addToBlogPost("ali")} />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item?.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
