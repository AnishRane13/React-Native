import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ".././global.css";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-blue-500 text-3xl">Homee</Text>
      <Link href='/about' asChild>
      <Pressable className='bg-blue-600 p-4 rounded-2xl'>
        <Text className='text-white text-center'>Go To About</Text>
      </Pressable>
      </Link>
    </View>
  );
};

export default Home;
