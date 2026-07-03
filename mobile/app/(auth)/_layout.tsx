import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from 'expo-router';

const AuthLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) return <Redirect href={"/(tabs)"} />;

  return (
    <Stack screenOptions={{
      headerShown:false
    }}/>
  )
}

export default AuthLayout