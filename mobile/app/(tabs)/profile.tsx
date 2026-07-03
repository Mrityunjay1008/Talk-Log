import { useAuth } from '@clerk/clerk-expo'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileTab = () => {
  const {signOut} = useAuth()
  return (
    <SafeAreaView className='bg-surface flex-1'>
        <Text className='text-white'>Chats Tab</Text>
        <Pressable 
  className="bg-red-500 h-12 w-40 items-center justify-center rounded-lg mt-4" 
  onPress={() => signOut()}
>
  <Text className="text-white font-bold">Sign Out</Text>
</Pressable>
    </SafeAreaView>
  )
}

export default ProfileTab