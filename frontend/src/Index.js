import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

export default function Index({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Splash"
        onPress={() => navigation.navigate("Splash")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Text>HI index</Text>
    </View>
  );
}
