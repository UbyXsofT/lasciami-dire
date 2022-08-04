import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import ThemeContext from "../styles/ThemeContext";
import SwitchTheme from "../components/SwitchTheme";

const HomeScreen = (theme) => {
  // Assegna un theme per leggere il contesto del tema corrente.
  // React troverà il provider del tema più vicino sopra e ne utilizzerà il valore.
  // il tema corrente.
  const myContext = useContext(ThemeContext);
  //console.log("myContext", myContext);
  theme = myContext.theme;
  //console.log("theme", theme);

  return (
    <View style={styles.body}>
      <SwitchTheme></SwitchTheme>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        lorem enim. Etiam accumsan nibh eu laoreet sollicitudin. Proin
        ultricies, metus nec auctor ultricies, dui metus vulputate odio, id
        hendrerit lectus mauris a ex.
      </Text>
      <Text style={styles.referralCode}>3XP4N510</Text>
      <Button onPress={() => {}} title='Accept' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Decline' color={theme.colors.ERROR} />
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: 20,
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.M,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: "bold",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: "justify",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: "bold",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
  });

export default HomeScreen;
