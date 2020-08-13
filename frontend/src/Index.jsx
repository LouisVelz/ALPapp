import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

import { GlobalContext } from './GlobalContext'

export default ({ navigation }) => {
  const cont = useContext(GlobalContext)

  if (cont.isLoggedIn === false) {

    return(
      <View>
          <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />

        <Button
          title="change global state"

          onPress={cont.toggleLogin}
        />
      </View>
    )
  } else {

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
        <Button
          title="change global state"

          onPress={cont.toggleLogin}
        />
      </View>
    );
  }
}