import React, { useState } from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/UnStuffLogo.png")}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        
         
            <AppFormField
              name={"email"}
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />

            <AppFormField
              name={"password"}
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="password"
              secureTextEntry
              textContentType="password"
            />

          <SubmitButton title={"Login"}/>
          
      
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    marginVerticle: 300,
    width: "80%",
  },
  container: {
    padding: 15,
  },
});
export default LoginScreen;
