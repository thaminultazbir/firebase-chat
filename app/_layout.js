import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Slot, useSegments, useRouter } from "expo-router";
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useRoute } from "@react-navigation/native";

const Mainlayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    //Check if user is authenticated or not
    if (typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      //redirect to Home
      router.replace("home");
    } else if (isAuthenticated == false) {
      //redirect to signIn page
      router.replace("signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};
export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Mainlayout />
    </AuthContextProvider>
  );
}
