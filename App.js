import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="flex-1 bg-gray-900 items-center justify-center">
      <Text className="text-3xl text-yellow-500 bg-red-100 p-4 rounded-lg shadow-lg">
        Open 
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
