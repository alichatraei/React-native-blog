import React, { useContext } from "react";
import { Text, View, FlatList, Button, Pressable } from "react-native";
import { Context } from "../../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  const { state, addToBlogPost } = useContext(Context);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("addBlog")}>
          <AntDesign
            style={{ marginRight: 10 }}
            name="plus"
            size={24}
            color="black"
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Button
        title="Add blog post"
        onPress={() => addToBlogPost("ali", `this is ${state.length + 1} blog`)}
      />
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("showBlog", { id: item?.id })}
          >
            <Text>{`${item?.title} - ${item?.content}`}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
