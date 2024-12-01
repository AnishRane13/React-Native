import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ".././global.css";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from "react-native-reanimated";

const Home = () => {
  const router = useRouter();

  return (
    <Animated.View 
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
    className="flex-1 justify-center items-center bg-white">
      <Text className="text-blue-500 text-3xl">Homeeeeee</Text>
      {/* <Link href='/about' asChild>
      <Pressable className='bg-blue-600 p-4 rounded-2xl'>
        <Text className='text-white text-center'>Go To About</Text>
      </Pressable>
      </Link> */}


      <Pressable
        className="bg-red-600 p-4 rounded-2xl"
        onPress={() => {
          router.push("/about");
        }}
      >
        <Text className="text-white text-center">Go to About</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Home;
