import { View, Text, Image, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Feather, Octicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-web";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";

export default function SignUp() {
  const router = useRouter();

  const emailRef = "";
  const passwordRef = "";
  const usernameRef = "";
  const profileRef = "";
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the field!");
      return;
    }
    //Register Process
  };
  return (
    <CustomKeyboardView>
      <View className="flex-1">
        <StatusBar style="dark" />
        <View
          style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
          className="flex-1 gap-12"
        >
          <View className="items-center">
            <Image
              style={{ height: hp(20) }}
              resizeMode="contain"
              source={require("../assets/images/register.png")}
            />
          </View>

          <View className="gap-10">
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wider text-center text-neutral-800"
            >
              Sign Up
            </Text>

            <View className="gap-4">
              {/* USERNAME FIELD */}
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Feather name="user" size={hp(3)} color="gray" />

                <TextInput
                  onChangeText={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Username"
                  placeholderTextColor={"gray"}
                />
              </View>

              {/* EmailAddress FIELD */}
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Octicons name="mail" size={hp(3)} color="gray" />

                <TextInput
                  onChangeText={(value) => (emailRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Email Address"
                  placeholderTextColor={"gray"}
                />
              </View>

              {/* password type input */}
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Octicons name="lock" size={hp(3)} color="gray" />

                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  secureTextEntry
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                />
              </View>

              {/* PROFILE URL FIELD */}
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Feather name="image" size={hp(3)} color="gray" />

                <TextInput
                  onChangeText={(value) => (profileRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Profile URL"
                  placeholderTextColor={"gray"}
                />
              </View>

              {/* <Text
                style={{ fontSize: hp(2) }}
                className="font-semibold text-right text-neutral-400"
              >
                Forget Password?
              </Text> */}
              {/* Submit Button */}

              <View>
                {loading ? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(6.5)} />
                  </View>
                ) : (
                  <Pressable
                    onPress={handleRegister}
                    style={{ height: hp(6.5) }}
                    className="bg-indigo-500 rounded-2xl justify-center items-center"
                  >
                    <Text
                      style={{ fontSize: hp(2.7) }}
                      className="text-white font-bold tracking-wider"
                    >
                      Sign Up
                    </Text>
                  </Pressable>
                )}
              </View>

              {/* Sign Up Text */}

              <View className="flex-row justify-center">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-neutral-500"
                >
                  Already have an account?
                </Text>
                <Pressable
                  onPress={() => {
                    router.push("signIn");
                  }}
                >
                  <Text
                    style={{ fontSize: hp(1.8) }}
                    className="font-bold text-indigo-500"
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
