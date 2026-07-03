import { Stack} from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import "../global.css"

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
const queryClient = new QueryClient()


export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{headerShown:false,  contentStyle: { backgroundColor: "#0D0D0F" } }}>
        <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
        <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
        <Stack.Screen name="sso-callback" /> 
      </Stack>
    </QueryClientProvider>
    </ClerkProvider>
  )
}
