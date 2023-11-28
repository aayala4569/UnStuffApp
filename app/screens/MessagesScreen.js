import React,  {useState} from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";


const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/meme.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/meme.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/meme.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessage] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)

  //delete our messages from our array and update our UI
  //We also need to call the server to delete the messages from the back end

  const handleDelete = (message) => {
   
    setMessage( messages.filter(m => m.id !== message.id))
  }







  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() =>
              console.log(" this is coming from our message scree,", item)
            }
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}  />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {setMessage([{id: 2, title: '12', description: 'D2', image: require('../assets/meme.png')}])}}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default MessagesScreen;
